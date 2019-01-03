import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/shared/seo'

import styled from '@emotion/styled'
import { screenmd, SectionBreak } from '../components/shared/styles'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter)

  return (
    <>
      <SEO
        title="Essays and thoughts on web development, client work, and growth at timcchang"
        keywords={[`UI`, `UX`, `Web Design`, `Business Design`]}
      />

      <Section>
        <Title>Tim Chang</Title>
        <Subtitle>Product Designer &amp; Developer</Subtitle>
        <SectionBreak />
        <Posts>
          {posts.map((post, index) => {
            const number = index + 1 < 10 ? `0${index + 1}` : index + 1
            return (
              <Post key={post.path}>
                <PostLink to="/">
                  <Details>
                    <Detail>{number}.</Detail>
                    <Detail>{post.short_name}</Detail>
                    <Detail>{post.scope}</Detail>
                  </Details>
                  <PostTitle>{post.title}</PostTitle>
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            short_name
            scope
            path
            date
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
  margin: 0 0 10px 0;
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
  font-weight: var(--fontbold);
  font-family: var(--titlefont);
`

export default IndexPage
