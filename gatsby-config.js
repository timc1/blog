const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Essays and thoughts on web development, client work, and growth at timcchang`,
    description: `Home to my independent work and experiments. It features essays on web design, development, client work, and growth. Currently, I am a product designer & developer based in Los Angeles building tools to empower others to create.`,
    author: `@timcchang`,
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      //options: {
      //  defaultLayouts: {
      //    default: path.resolve(`./src/components/shared/layout.js`),
      //  },
      //},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `rgba(15,13,32,0.99)`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/shared/layout`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
