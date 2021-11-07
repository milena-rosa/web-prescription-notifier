import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --gray-100: #383838;
    --gray-80: #575757;
    --gray-60: #929292;
    --gray-40: #bfbfbf;
    --gray-20: #e3e3e3;
    --gray-10: #f6f6f6;
    --gray-5: #f3f3f3;
    --white: #ffffff;
    --green-primary: #8dfe7e;
    --blue-primary: #04a0c3;
    --blue-to-purple: linear-gradient(98.68deg, #032bdb 0%, #1DEAFB 0.01%, #9200ec 89.06%);
    --green-to-blue: linear-gradient(98.68deg, #8dfe7e 0%, #8dfe7e 0.01%, #04a0c3 100%);
    --soft-green: linear-gradient(98.68deg, #8dfe7e 0.01%, #039682 100%)
    --soft-blue: linear-gradient(98.68deg, #00ddfa 0%, #1deafb 0.01%, #04a0c3 100%);
    --deep-blue: linear-gradient(98.68deg, #04a0c3 0%, #04a0c3 0.01%, <div id="032bdb"></div> 100%);
    --black-to-gray: linear-gradient(101.46deg, #000000 1.51%, #383838 99.39%);

    /* success */
    --green-60: #03ab5a;
    /* error */
    --red: #df1b00;
    /* attention */
    --yellow: #faae02;

    --orange: #f07300;
    --green-20: #55e800;
    --green-80: #008976;
    --blue-20: #00ddfa;
    --blue-60: #032bdb;
    --purple: #9200ec;
    --pink: #fa07f0;

    --blue-20-to-purple: linear-gradient(92.43deg, #00ddfa 0.25%, #9200ec 100%);
    --yellow-to-pink: linear-gradient(92.43deg, #faae02 0.25%, #fa07f0 100%);
    --green-pastel-to-blue-pastel: linear-gradient(92.43deg, #caffab 0.25%, #bbe6ff 100%);
    --blue-pastel-to-purple-pastel: linear-gradient(92.43deg, #b3e2fd 0.25%, #bbe6ff 0.26%, #eac9ff 100%);

    --yellow-pastel: #ffdc99;
    --green-pastel: #caffab;
    --blue-pastel: #bbe6ff;
    --purple-pastel: #eac9ff;

    --skin-20: #ffddba;
    --skin-40: #e2a851;
    --skin-60: #a53f1c;
    --skin-80: #783b04;
    --skin-100: #4b1705;
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
