import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type SEOProps = {
  description?: string
  lang?: string
  meta?: []
  keywords?: string[]
  title?: string
}

const SEO = ({ description, lang, meta = [], keywords, title }: SEOProps) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title || data.site.siteMetadata.title
        const metaDescription =
          description || data.site.siteMetadata.description

        const metaKeywords = keywords || data.site.siteMetadata.keywords
        const baseUrl =
          process.env.NODE_ENV !== 'production'
            ? 'http://localhost:8000'
            : 'https://timcchang.com'

        return (
          <Helmet
            htmlAttributes={{
              lang: 'en',
            }}
            title={metaTitle}
            titleTemplate={`%s`}
            meta={[
              {
                name: `title`,
                content: metaTitle,
              },
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: baseUrl,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: `${baseUrl}/static/social_image.jpg`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `google-site-verification`,
                content: `joDHdTdb56PSG3inAa0NTavlVPlKpbJSIZM0OfTfImI`,
              },
            ]
              .concat(
                metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`
