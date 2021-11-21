import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export const convertToUTC = (date: Date): string => dayjs(date).utc().local().format()

export const toDate = (date: string): Date => {
  const dateUtc = convertToUTC(dayjs(date).toDate())
  return dayjs(dateUtc).toDate()
}

export const compareInHours = (startDate: Date, endDate: Date): number => {
  const endDateUtc = convertToUTC(endDate)
  const startDateUtc = convertToUTC(startDate)
  return dayjs(endDateUtc).diff(startDateUtc, 'hours')
}

export const dateNow = (): Date => dayjs().toDate()

export const compareInDays = (startDate: Date, endDate: Date): number => {
  const endDateUtc = convertToUTC(endDate)
  const startDateUtc = convertToUTC(startDate)
  return dayjs(endDateUtc).diff(startDateUtc, 'days')
}

export const addDaysToNow = (days: number): Date => dayjs().add(days, 'days').toDate()
