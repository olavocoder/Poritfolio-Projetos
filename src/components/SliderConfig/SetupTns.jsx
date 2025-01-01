import Script from 'next/script'

export const SetupTns = ({ className, classBtn = '' }) => {
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
                autoplay: true,
                ${classBtn !== '' ? `prevButton: '.${classBtn}_left',` : ''}
                ${classBtn !== '' ? `nextButton: '.${classBtn}_right'` : ''}
              });
            `
      }}
    />
  )
}
