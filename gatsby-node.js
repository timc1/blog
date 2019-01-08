const path = require('path')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    const previous = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node

    createPage({
      path: `${node.parent.sourceInstanceName}/${node.parent.name}`,
      component: componentWithMDXScope(
        path.resolve(`${__dirname}/src/templates/post-template.js`),
        node.code.scope,
        __dirname
      ),
      context: {
        frontmatter: node.frontmatter,
        html: node.code.body,
        next,
        previous,
      },
    })
  })
}

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
                  id
                  frontmatter {
                    title
                    date
                    scope
                    short_name
                    background
                    project_scope
                    seo_description
                  }
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                    body
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
        const { edges } = data.allMdx

        createPosts(actions.createPage, edges)
      })
    )
  })
}

//exports.onCreateNode = ({ node, getNode, actions }) => {
//  const { createNodeField } = actions
//
//  if (node.internal.type === `Mdx`) {
//    const parent = getNode(node.parent)
//
//    createNodeField({
//      name: 'id',
//      node,
//      value: node.id,
//    })
//
//    createNodeField({
//      name: 'title',
//      node,
//      value: node.frontmatter.title,
//    })
//
//    createNodeField({
//      name: 'description',
//      node,
//      value: node.frontmatter.background,
//    })
//
//    createNodeField({
//      name: 'slug',
//      node,
//      value: node.frontmatter.slug,
//    })
//
//    createNodeField({
//      name: 'date',
//      node,
//      value: node.frontmatter.date || '',
//    })
//
//    createNodeField({
//      name: 'categories',
//      node,
//      value: node.frontmatter.categories || [],
//    })
//
//    createNodeField({
//      name: 'keywords',
//      node,
//      value: node.frontmatter.keywords || [],
//    })
//  }
//}
//
