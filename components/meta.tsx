import Head from 'next/head'
import siteConfig from 'config/site-config'

interface MetaProps {
  title?: string
  description?: string
  url: string
}

const Meta = ({ title, description, url }: MetaProps) => {
  return (
    <Head>
      <title>
        {title ? [title, siteConfig.title].join(' | ') : siteConfig.title}
      </title>
      <meta
        name='description'
        content={description ? description : siteConfig.description}
      />
      <link rel='canonical' href={siteConfig.baseURL + url} />

      <meta name='format-detection' content='telephone=no' />
      <meta property='og:type' content='article' />
      <meta property='og:site_name' content={siteConfig.title} />
      <meta property='og:url' content={siteConfig.baseURL + url} />
      <meta
        property='og:title'
        content={
          title ? [title, siteConfig.title].join(' | ') : siteConfig.title
        }
      />
      <meta
        property='og:description'
        content={description ? description : siteConfig.description}
      />
      <meta
        property='og:image'
        content={siteConfig.baseURL + '/images/logo.png'}
      />
      <meta name='twitter:card' content={'summary'} />
      <meta
        name='twitter:title'
        content={
          title ? [title, siteConfig.title].join(' | ') : siteConfig.title
        }
      />
      <meta
        name='twitter:image'
        content={siteConfig.baseURL + '/images/logo.png'}
      />
    </Head>
  )
}

export default Meta
