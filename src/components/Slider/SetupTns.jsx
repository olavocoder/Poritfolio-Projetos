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
                loop: false,
                autoPlay: false,
                controls: true,
                slideBy: 'page',
                navContainer: false,
                loop: true,
                prevButton: '.${className.replace('Img', '')}_left',
                nextButton: '.${className.replace('Img', '')}_right',
                controls: true,
              });
            `
      }}
    />
  )
}