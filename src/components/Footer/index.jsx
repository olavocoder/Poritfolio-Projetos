import React from 'react'
import Newsletter from '../Newsletter'
import Image from 'next/image'
import backImg from '../../assets/backImage.jpg'
import { Container } from '../Container'
import * as S from './styles'

const Footer = ({ footer }) => (
  <S.Wrapper>
    <div
      className="footer-bg absolute w-full h-full z-0 bg-blend-color mt-[-30px]"
      style={{ background: `url(${backImg.src}), rgb(17 17 17 / 86%)` }}
    />
    <Container>
      <div className="footer-wrapper">
        <S.SocialLogoArea>
          <Image src={footer?.logoFooter?.asset?.url} width={150} height={50} />
          <div className="flex">
            {footer?.SocialFooter?.map((item, index) => (
              <a href={item?.url} key={index} className="social_icons">
                <Image src={item?.icon?.asset?.url} width={30} height={30} />
              </a>
            ))}
          </div>
        </S.SocialLogoArea>
        <Newsletter />
        <p>{footer?.policyText}</p>
      </div>
    </Container>
  </S.Wrapper>
)

export default Footer
