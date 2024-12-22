import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  iframe {
    width: 100%;
    height: calc(100vw / 3);
  }
  .header-space {
    padding-bottom: 80px;
  }
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 20px;
  }
  h2,
  h3 {
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    margin-bottom: 32px;
    line-height: 1.3;
  }
  p {
    strong {
      background-color: #000;
      color: #fff;
    }
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[100]};
    color: ${theme.colors.neutral[0]};
    width: 100%;
  `}
`
