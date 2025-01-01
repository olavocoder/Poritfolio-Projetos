import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px 0 50px;
  display: flex;
  justify-content: center;

  a {
    color: #000;
    text-decoration: none;
    &:first-child {
      font-weight: 700;
    }
  }
  .news-check {
    .chakra-checkbox__control {
      outline: none;
      border-color: #fff;
    }

    &.notCheck {
      .chakra-checkbox__control {
        border-color: #ef4444;
      }
    }
  }
  span {
    margin: 0 10px;
  }
`
