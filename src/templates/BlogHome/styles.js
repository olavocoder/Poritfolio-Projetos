import styled from 'styled-components'

import { Container } from '../../components/Container'
import { devices } from '../../styles/utils/devices'
export const Wrapper = styled.div`
  .tns-inner {
    width: 320px;
    height: 350px;
  }

  @media (min-width: 1000px) {
    .tns-nav {
      margin: -80px auto;
    }
  }

  @media (min-width: 1200px) {
    .tns-inner {
      width: 100%;
    }
    .tns-nav {
      margin: -20px auto;
    }
  }

  .slideItem-wrapper {
    background-color: #ffffff00;
    backdrop-filter: blur(15px);
    box-shadow: inset -2px 0px 3px #8a8a8a;
    gap: 0;
    flex-direction: column;
    height: 349px;
    cursor: url(https://play.vsthemes.org/t-cursors/36701/6c24c665bde4efc5166fe06fc4394471.webp),
      pointer;

    div {
      padding: 10px 20px;
    }

    a {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }

    img {
      width: 100%;
      height: 210px;
      border-radius: 30px 30px 0 0;
      object-fit: cover;
      object-position: top;
      filter: drop-shadow(2px 4px 6px black) brightness(1);
      transition: 0.3s all;
    }

    &:hover {
      img {
        filter: drop-shadow(2px 4px 6px black) brightness(1.5);
      }
    }

    @media (min-width: 1200px) {
      flex-direction: row;
      gap: 30px;
      height: 280px;

      h2 {
        font-size: 40px;
        font-weight: 700;
      }
      img {
        border-radius: 30px 0 0 30px;
        width: 500px;
        height: auto;
      }
    }
  }
`

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
      gap: 35px;
      img {
        border-radius: 100%;
        transition: all 0.3s;
        &:hover {
          transform: translate(0, -7px);
        }
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
