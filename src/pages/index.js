import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/shared/seo'

import styled from '@emotion/styled'
import { screenmd, SectionBreak } from '../components/shared/styles'

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges.map(edge => ({
    frontmatter: edge.node.frontmatter,
    fields: edge.node.fields,
  }))

  return (
    <>
      <SEO
        title="Essays and thoughts on web development, client work, and growth at timcchang"
        keywords={[`UI`, `UX`, `Web Design`, `Business Design`]}
      />

      <Section>
        <Title css={{ fontWeight: `var(--fontlight)` }}>Tim Chang</Title>
        <Subtitle css={{ fontWeight: `var(--fontbold)` }}>
          Product Designer &amp; Developer
        </Subtitle>
        <SectionBreak />
        <Posts>
          {posts.map((post, index) => {
            const number = index + 1 < 10 ? `0${index + 1}` : index + 1
            return (
              <Post key={post.fields.path}>
                <PostLink
                  to={`${post.fields.sourceInstanceName}/${post.fields.path}`}
                >
                  <Details>
                    <Detail>{number}.</Detail>
                    <Detail>{post.frontmatter.short_name}</Detail>
                    <Detail>{post.frontmatter.scope}</Detail>
                  </Details>
                  <PostTitle>{post.frontmatter.title}</PostTitle>
                </PostLink>
              </Post>
            )
          })}
        </Posts>
      </Section>
    </>
  )
}

export const query = graphql`
  query PostsQuery {
    allMdx {
      edges {
        node {
          fields {
            path
            sourceInstanceName
          }
          frontmatter {
            title
            date
            short_name
            scope
            project_scope
          }
        }
      }
    }
  }
`

const Section = styled.section`
  max-width: var(--skewedcontent);
  margin-left: auto;
  padding-top: 80px;
`

const Details = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  color: var(--gray);
`

const Detail = styled.li`
  list-style: none;
  font-size: var(--fontsm);
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: var(--fontmd);
  font-family: var(--titlefont);
  font-weight: var(--fontregular);
  margin: 0 0 5px 0;
`

const Subtitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--titlefont);
  font-weight: var(--fontregular);
  margin: 0;
`

const Posts = styled.ul``

const Post = styled.li`
  list-style: none;
  padding-bottom: 60px;
`

const PostLink = styled(Link)`
  color: var(--black);
  outline: none;

  @media (min-width: ${screenmd + 1}px) {
    &:hover,
    &:active,
    &:focus {
      h1,
      ul {
        text-decoration: underline;
      }
    }
  }
`

const PostTitle = styled.h1`
  margin: 0;
  font-size: var(--fontxl);
  font-weight: var(--fontlight);
  font-family: var(--titlefont);
`

export default IndexPage
