import React from 'react'

import Image from 'next/image'

import { Container } from '../Container'
import * as S from './styles'

const Footer = ({ footer }) => (
  <S.Wrapper>
    <Container>
      <footer>
        <S.SocialLogoArea>
          <Image src={footer?.logoFooter?.asset?.url} width={150} height={50} />
          <div>
            {footer?.SocialFooter?.map((item, index) => (
              <a href={item?.url} key={index} className="social_icons">
                <Image src={item?.icon?.asset?.url} width={30} height={30} />
              </a>
            ))}
          </div>
        </S.SocialLogoArea>
        <p>{footer?.policyText}</p>
      </footer>
    </Container>
  </S.Wrapper>
)

export default Footer
