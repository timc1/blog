const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  frontmatter {
                    title
                    path
                    date
                    short_name
                    scope
                    background
                    project_scope
                    _PARENT
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: `${node.frontmatter.path}`,
            component: path.resolve(
              `${__dirname}/src/templates/post-template.js`
            ),
            context: { id: node.id, frontmatter: node.frontmatter },
          })
        })
      })
    )
  })
}
