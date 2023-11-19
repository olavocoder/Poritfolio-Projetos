import styled from 'styled-components'

import { Container } from '../../components/Container'
import { devices } from '../../styles/utils/devices'
export const Wrapper = styled.div``

export const Banner = styled.div`
  ${({ back }) => `background-image: url('${back}');`}
  height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  @media ${devices.tabletL} {
    background-position-y: -204px;
  }
`
export const ContentBanner = styled(Container)`
  height: 100vh;
  .bannerItems {
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
    width: 100%;
    p,
    h1 {
      margin-bottom: 47px;
    }
    h1 {
      font-size: 42px;
      line-height: 59px;
      font-weight: 400;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    .bannerItems-social {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      img {
        background-color: white;
        border-radius: 100%;
      }
    }
    @media ${devices.tabletL} {
      width: fit-content;
    }
  }
`
export const LayoutSlide = styled.div`
  display: flex;
  height: 100vh;
  ${({ back }) => `background-color: ${back};`}
`

export const Modal = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100vh;
  color: white;
  background: rgba(7, 7, 7, 0.34);
  border-radius: 16px;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  div {
    display: flex;
    align-items: center;
    height: inherit;
    ul {
      margin-left: 50px;
      li {
        cursor: pointer;
        text-align: left;
        font-weight: 400;
        font-size: 20px;
        line-height: 44px;
        list-style: none;
      }
    }
  }
`
