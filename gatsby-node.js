const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    console.log('node.path', node.path)
    console.log('parent', parent)

    if (parent.internal.type === 'File') {
      createNodeField({
        name: `path`,
        node,
        value: parent.name,
      })
      createNodeField({
        name: `sourceInstanceName`,
        node,
        value: parent.sourceInstanceName,
      })
    }
  }
}

//exports.createPages = ({ graphql, actions, getNode }) => {
//  const { createPage } = actions
//  return new Promise((resolve, reject) => {
//    resolve(
//      graphql(
//        `
//          {
//            allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
//              edges {
//                node {
//                  fields {
//                    path
//                    sourceInstanceName
//                  }
//                  frontmatter {
//                    title
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
//            path: `${node.field.path}`,
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
