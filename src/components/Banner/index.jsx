import * as S from './styles'
import Image from 'next/image'
import { HiArrowSmRight } from 'react-icons/hi'

export default function Banner({ data }) {
  return (
    <S.LayoutWrapper>
      <div className="banner-content w-full lg:w-1/2">
        <h2 className="max-w-80 font-bold uppercase">{data?.title}</h2>
        <p>{data?.description}</p>
        <a className="font-bold" href={data?.linkButton}>
          {data?.textButton} <HiArrowSmRight className="inline-block" />
        </a>
      </div>
      <div className="relative w-full lg:w-1/2 h-[300px] rounded-t-3xl lg:rounded-3xl">
        <Image
          fill
          src={data?.mainImage?.asset?.url}
          className="rounded-t-3xl lg:rounded-3xl"
        />
      </div>
    </S.LayoutWrapper>
  )
}
