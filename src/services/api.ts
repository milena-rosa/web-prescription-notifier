import axios, { AxiosError } from 'axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

let isRefreshing = false
let failedRequestsQueue: { onSuccess: (token: string) => void; onFailure: (error: AxiosError<any, any>) => void }[] = []

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['prescription_notifier.refreshToken']}`
    }
  })

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.statusText === 'Unauthorized') {
          cookies = parseCookies(ctx)
          const { 'prescription_notifier.refreshToken': oldRefreshToken } = cookies
          const originalConfig = error.config

          if (!isRefreshing) {
            isRefreshing = true

            api
              .post('/refresh-token', { refreshToken: oldRefreshToken })
              .then((response) => {
                const { token, refreshToken } = response.data

                const cookiesOptions = {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/'
                }
                setCookie(ctx, 'prescription_notifier.token', token, cookiesOptions)
                setCookie(ctx, 'prescription_notifier.refreshToken', refreshToken, cookiesOptions)

                api.defaults.headers.common.Authorization = `Bearer ${refreshToken}`

                failedRequestsQueue.forEach((request) => request.onSuccess(refreshToken))
                failedRequestsQueue = []
              })
              .catch((error) => {
                failedRequestsQueue.forEach((request) => request.onFailure(error))
                failedRequestsQueue = []
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                if (originalConfig.headers) {
                  originalConfig.headers.Authorization = `Bearer ${token}`
                }
                resolve(api(originalConfig))
              },
              onFailure: (error: AxiosError) => {
                reject(error)
              }
            })
          })
        } else {
          destroyCookie(undefined, 'prescription_notifier.token')
          destroyCookie(undefined, 'prescription_notifier.refreshToken')
        }
      }

      return Promise.reject(error)
    }
  )

  return api
}
