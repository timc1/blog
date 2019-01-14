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
        path.resolve(`${__dirname}/src/templates/post-template.tsx`),
        node.code.scope,
        __dirname
      ),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
                    id
                    date
                    title
                    short_name
                    background
                    scope
                    project_scope
                    banner_image
                    banner_image_alt
                  }
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
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

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: 'id',
      node,
      value: node.id,
    })

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    })

    createNodeField({
      name: 'short_name',
      node,
      value: node.frontmatter.short_name,
    })

    createNodeField({
      name: 'background',
      node,
      value: node.frontmatter.background || '',
    })

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date || '',
    })

    createNodeField({
      name: 'scope',
      node,
      value: node.frontmatter.scope || '',
    })

    createNodeField({
      name: 'project_scope',
      node,
      value: node.frontmatter.project_scope || [],
    })

    createNodeField({
      name: 'banner_image',
      node,
      value: node.frontmatter.banner_image || '',
    })

    createNodeField({
      name: 'banner_image_alt',
      node,
      value: node.frontmatter.banner_image_alt || '',
    })
  }
}
