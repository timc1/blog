const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

//exports.createPages = ({ graphql, actions }) => {
//  const { createPage } = actions
//  return new Promise((resolve, reject) => {
//    resolve(
//      graphql(
//        `
//          {
//            allMdx {
//              edges {
//                node {
//                  frontmatter {
//                    title
//                    path
//                    date
//                    short_name
//                    scope
//                    background
//                    project_scope
//                  }
//                  html
//                }
//              }
//            }
//          }
//        `
//      ).then(result => {
//        if (result.errors) {
//          console.log(result.errors)
//          reject(result.errors)
//        }
//        // Create blog posts pages.
//        result.data.allMdx.edges.forEach(({ node }) => {
//          createPage({
//            path: `${node.frontmatter.path}`,
//            component: path.resolve(
//              `${__dirname}/src/templates/post-template.js`
//            ),
//            context: {
//              frontmatter: node.frontmatter,
//              html: node.html,
//            },
//          })
//        })
//      })
//    )
//  })
//}
