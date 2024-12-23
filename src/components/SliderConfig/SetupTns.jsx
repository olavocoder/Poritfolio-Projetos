import Script from 'next/script'

export const SetupTns = ({ className }) => {
  return (
    <Script
      className={className}
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
            var ${className} = tns({
                container: '.${className}',
                items: 1,
                slideBy: 'page',
                navContainer: false,
                loop: true,
                autoplay: false
              });
            `
      }}
    />
  )
}
