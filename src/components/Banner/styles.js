import styled from 'styled-components'
export const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  .banner-content {
    border: 1px solid #cdcdcd;
    padding: 20px;
    border-radius: 0 0 32px 32px;
    box-shadow: -2px 4px 7px 0px #b6b6b6;
  }

  h2 {
    font-size: 42px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    .banner-content {
      border-radius: 32px 0 7px 32px;
    }
  }
`
