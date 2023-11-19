//Tratar as informações conforme a biblioteca:
//https://www.npmjs.com/package/next-seo

export const UseSeoTreated = (seo) => {
  let title = ''
  let description = ''
  let canonical = ''
  let noindex = ''

  if (!seo) {
    title = seo.title
    description = seo.description
    canonical = seo.og_url
    noindex = seo.robots.follow.index === 'noindex' ? true : false
  }

  const data = {
    title,
    description,
    canonical,
    noindex
  }

  return data
}
