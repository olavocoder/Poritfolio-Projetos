import styled from 'styled-components'
export const LayoutWrapper = styled.div`
  .card-body {
    p {
      margin-bottom: 0;
    }
  }

  .date {
    text-align: center;

    p {
      margin: 0;
    }

    &-year,
    &-month {
      font-size: 10px;
    }
  }

  :hover {
    img {
      transform: scale(0.85);
    }
    .date {
      border: 0.3px solid;
    }
  }
`
