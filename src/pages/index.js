import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/shared/seo'

import styled from '@emotion/styled'
import { screenmd, SectionBreak } from '../components/shared/styles'

import DistortedImage from '../components/animations/distorted-image'

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges.map(edge => ({
    frontmatter: edge.node.frontmatter,
    fields: edge.node.parent,
  }))

  return (
    <>
      <SEO
        title="Essays and thoughts on web development, client work, and growth at timcchang"
        keywords={[`UI`, `UX`, `Web Design`, `Business Design`]}
      />
      <DistortedImage />
      <Section className="blur-me">
        <Title>Tim Chang</Title>
        <Subtitle>Product Designer &amp; Developer</Subtitle>
        <SectionBreak />
        <Posts>
          {posts.map((post, index) => {
            const number = index + 1 < 10 ? `0${index + 1}` : index + 1
            return (
              <Post key={post.fields.name}>
                <PostLink
                  to={`/${post.fields.sourceInstanceName}/${post.fields.name}`}
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
          id
          frontmatter {
            title
            date
            scope
            short_name
          }
          parent {
            ... on File {
              name
              sourceInstanceName
            }
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

export const Details = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 10px;
  color: var(--gray);

  @media (min-width: ${screenmd + 1}px) {
    justify-content: ${props =>
      props.theme.direction === 'right' ? 'end' : 'start'};

    margin-right: ${props =>
      props.theme.direction === 'right' ? '1.25rem' : '0'};
  }

  @media (max-width: ${screenmd}px) {
    margin-left: 0.25rem;
  }

  transform: ${props =>
    props.theme.direction === 'left'
      ? 'translateX(1.25rem)'
      : props =>
          props.theme.direction === 'right'
            ? 'translateX(0)'
            : 'translateX(.25rem)'};
`

export const Detail = styled.li`
  list-style: none;
  font-size: var(--fontsm);
  color: var(--gray);
  text-transform: uppercase;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: var(--fontmd);
  font-family: var(--titlefont);
  font-weight: var(--fontlight);
  margin: 0 0 5px 0;
`

const Subtitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--titlefont);
  font-weight: var(--fontlight);
  margin: 0;
`

const Posts = styled.ul``

const Post = styled.li`
  list-style: none;
  padding-bottom: 60px;
`

export const PostTitle = styled.h1`
  margin: 0;
  font-size: var(--fontxl);
  font-weight: var(--fontlight);
  font-family: var(--titlefont);

  @media (min-width: ${screenmd + 1}px) {
    text-align: ${props =>
      props.theme.direction === 'right' ? 'right' : 'left'};
  }
`

const PostLink = styled(Link)`
  color: var(--black);
  outline: none;

  @media (min-width: ${screenmd + 1}px) {
    &:hover,
    &:active,
    &:focus {
      ${PostTitle} {
        text-decoration: underline;
      }
    }
  }
`

export default IndexPage
