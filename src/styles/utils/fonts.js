import { createGlobalStyle } from 'styled-components'

import DMSansBold from '../../assets/fonts/DMSans-Bold.ttf'
import DMSansBoldItalic from '../../assets/fonts/DMSans-BoldItalic.ttf'
import DMSansExtraBold from '../../assets/fonts/DMSans-ExtraBold.ttf'
import DMSansExtraBoldItalic from '../../assets/fonts/DMSans-ExtraBoldItalic.ttf'
import DMSansRegularItalic from '../../assets/fonts/DMSans-Italic.ttf'
import DMSansMedium from '../../assets/fonts/DMSans-Medium.ttf'
import DMSansMediumItalic from '../../assets/fonts/DMSans-MediumItalic.ttf'
import DMSansRegular from '../../assets/fonts/DMSans-Regular.ttf'
import DMSansSemiBold from '../../assets/fonts/DMSans-SemiBold.ttf'
import DMSansSemiBoldItalic from '../../assets/fonts/DMSans-SemiBoldItalic.ttf'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansExtraBold});
    font-weight: 800;
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansExtraBoldItalic});
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansBold});
    font-weight: 700;
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansBoldItalic});
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansSemiBold});
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansSemiBoldItalic});
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansMediumItalic});
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansMedium});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansRegularItalic});
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'DMSans';
    src: url(${DMSansRegular});
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export default GlobalFonts
