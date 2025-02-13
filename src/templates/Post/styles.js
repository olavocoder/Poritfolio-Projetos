import styled from 'styled-components'

import { Container } from '../../components/Container'
import { devices } from '../../styles/utils/devices'
export const Wrapper = styled.div``

export const Banner = styled.div`
  ${({ back }) =>
    `background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${back}');`}
  height: 50vh;
  background-attachment: fixed;
  background-size: cover;
  @media ${devices.tabletL} {
    background-position-y: -204px;
  }
`
export const ContentBanner = styled(Container)`
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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

  @media ${devices.tabletL} {
    width: fit-content;
  }
`

export const ContainerWrapper = styled(Container)`
  h2 {
    margin: 50px 0 15px;
  }
`
export const ContentArea = styled.main`
  display: flex;
  justify-content: space-between;

  .content {
    width: 800px;
  }

  .post-image {
    margin-top: 50px;
    width: 100%;
    height: auto;
    box-shadow: 7px 8px 5px #cdcdcb;
  }

  .slide-card {
    width: 246px;
    flex-wrap: wrap;
  }

  .tns-inner {
    width: 300px;
  }

  @media (min-width: 1200px) {
    .tns-inner {
      width: 800px;
    }
  }
`
