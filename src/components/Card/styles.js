import styled from 'styled-components'
export const LayoutWrapper = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 8px 24px 0px rgba(140, 149, 159, 0.2);
  button {
    width: fit-content;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 30px 30px 0 0;
  }
`
