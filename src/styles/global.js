import { createGlobalStyle, css } from 'styled-components'

import { devices } from './utils/devices'

const GlobalStyles = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
    }

    body {
      cursor: url(https://play.vsthemes.org/t-cursors/15044/3c05433e99da09415a6fbe7801e76124.webp),
        auto;
      font-family: ${theme.font.family.normal};
      width: 100%;
      overflow-x: hidden;
      button,
      a {
        cursor: url(https://play.vsthemes.org/t-cursors/36701/6c24c665bde4efc5166fe06fc4394471.webp),
          pointer;
      }
      &.no-scroll {
        overflow: hidden;
      }

      @media ${devices.tabletL} {
        background: ${theme.colors.primary[0]};
      }

      &.font-large {
        font-size: 18px;
      }
    }
  `}
`

export default GlobalStyles
