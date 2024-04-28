import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: sticky;
  width: 200px;
  height: max-content;
  top: 100px;
  margin-top: 30px;
  .h4 {
    margin: 15px 0;
  }
  .sidebar-categories {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
`
export const CardSidebar = styled.div`
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 8px 24px 0px rgba(140, 149, 159, 0.2);
  padding-bottom: 15px;
  background-color: #000000de;
  backdrop-filter: blur(15px);
  color: #fff;
  p,
  h4 {
    padding: 5px 20px;
  }
  p {
    margin-bottom: 5px;
  }
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
  a {
    display: block;
    margin: auto;
    width: fit-content;
  }
`
