import styled from 'styled-components'
export const LayoutWrapper = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 8px 24px 0px rgba(140, 149, 159, 0.2);

  background-color: #000000de;
  backdrop-filter: blur(15px);
  color: #fff;
  p {
    padding: 15px;
  }
  button {
    width: fit-content;
    margin-bottom: 15px;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }
`
