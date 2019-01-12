import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/shared/seo'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
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
        keywords={['UI', 'UX', 'Web Design', 'Business Design']}
      />
      <DistortedImage />
      <Section className="blur-me">
        <Title className="title">Tim Chang</Title>
        <Subtitle className="subtitle">
          Product Designer &amp; Developer
        </Subtitle>
        <SectionBreak className="break" />
        <Posts>
          {posts.map((post, index) => {
            const number = index + 1 < 10 ? `0${index + 1}` : index + 1
            return (
              <Post key={post.fields.name} className="post">
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

const title = keyframes`
  to {
    transform: scaleX(0);
  }
`

const post = keyframes`
  to {
    opacity: 1; 
    transform: translateY(0);
  }
`

const animateBreak = keyframes`
  to {
    transform: scaleX(1)
  }
`

const Section = styled.section`
  max-width: var(--skewedcontent);
  margin-left: auto;
  padding-top: 80px;

  .title,
  .subtitle {
    position: relative;
    transition-property: opacity;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--white);
      transform: scaleX(1);
      transform-origin: 100% 0;
      animation: ${title} 0.8s var(--ease);
      animation-delay: 1s;
      animation-fill-mode: forwards;
    }
  }

  .break {
    transform: scaleX(0);
    transform-origin: 0;
    animation: ${animateBreak} 0.3s var(--ease);
    animation-delay: 2.1s;
  }

  .post {
    opacity: 0;
    transform: translateY(10px);
    transition-property: opacity, transform;
    animation: ${post} 0.4s var(--ease);
  }
  .post:first-of-type {
    animation-delay: 1.4s;
  }
  .post:nth-of-type(2) {
    animation-delay: 1.6s;
  }
  .post:nth-of-type(3) {
    animation-delay: 1.8s;
  }

  .break,
  .post {
    animation-fill-mode: forwards;
  }
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
  color: var(--black);
  margin: 0 0 5px 0;
`

const Subtitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--titlefont);
  font-weight: var(--fontlight);
  color: var(--black);
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
  color: var(--black);

  @media (min-width: ${screenmd + 1}px) {
    text-align: ${props =>
      props.theme.direction === 'right' ? 'right' : 'left'};
  }
`

const PostLink = styled(Link)`
  color: var(--black);
  outline: none;

  @media (min-width: ${screenmd + 1}px) {
    &:focus {
      ${PostTitle} {
        text-decoration: underline;
      }
    }
    &:hover,
    &:active {
      ${PostTitle} {
        text-decoration: none;
      }
    }
  }
`

export default IndexPage
