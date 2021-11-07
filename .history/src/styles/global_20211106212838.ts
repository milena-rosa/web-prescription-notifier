import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --gray: #b5b5b5;
    --white: #ffffff;

    --green-primary: #117849;
    --green-primary-70: rgba(17, 120, 73, 0.7);
    --green-primary-30: rgba(17, 120, 73, 0.3);
    --green-primary-5: rgba(17, 120, 73, 0.05);

    --green: #dbebe4;

    --green-80: #51665c;

    --red: #ff0000;
    --yellow: #f6ff8f;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--white);
    color: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, select {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  button {
    border: none;
    cursor: pointer;
  }

  .react-modal-overlay {
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 11;
  }

  .react-modal-content {
    background: var(--white);
    border-radius: 0.25rem;
    min-height: 2.4rem;
    max-width: 41rem;
    position: relative;
    z-index: 12;
  }

  .react-modal-close {
    background: transparent;
    border: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .react-tooltip {
    background: var(--gray-100);
    border: 0;
    border-radius: 0.125rem;
    font-family: 'Rubik';
    font-size: 0.75rem;
    line-height: 0.875rem;
    padding: 4px 8px;

    p {
      color: var(--white);
    }

    span {
      color: var(--gray-60);
    }
  }

  .editor {
    video {
      width: 100%;
      height: 100%;
    }

    a {
      color: var(--blue-primary);
      font-weight: bold;
      text-decoration: underline;
    }

    > img {
      height: auto;
      width: 100%;
    }

    ul {
     margin-left: 1.5rem;
    }
  }
`
