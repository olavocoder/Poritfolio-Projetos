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
                autoplay: true,
                controls: true,
                slideBy: 'page',
                navContainer: false,
                loop: true,
                prevButton: '.${className
                  .replace('Img', '')
                  .replace('Skills', '')}_left',
                nextButton: '.${className
                  .replace('Img', '')
                  .replace('Skills', '')}_right',
\              });
            `
      }}
    />
  )
}
