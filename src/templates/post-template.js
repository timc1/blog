import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

import { screenmd, maxWidth, SectionBreak } from '../components/shared/styles'

import SEO from '../components/shared/seo'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Link, graphql } from 'gatsby'

import { PostTitle, Details, Detail } from '../pages/index'

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date
        scope
        short_name
        background
        project_scope
        seo_description
      }
      code {
        body
      }
    }
  }
`

export default function Template({ pageContext, data }) {
  const { next, previous } = pageContext
  const { mdx } = data
  const { frontmatter } = mdx

  return (
    <div className="blur-me">
      <SEO
        title={frontmatter.title}
        description={frontmatter.seo_description}
      />
      <Title>{frontmatter.title}</Title>
      <Info>
        <InfoItem>{frontmatter.short_name}</InfoItem>
        <InfoItem>{frontmatter.scope}</InfoItem>
      </Info>
      <Break />
      {(frontmatter.project_scope || frontmatter.background) && (
        <PostDetails>
          {frontmatter.background && (
            <div>
              <PostDetailsTitle>Background</PostDetailsTitle>
              <Scope>
                <ScopeItem css={{ fontSize: `var(--fontmd)` }}>
                  {frontmatter.background}
                </ScopeItem>
              </Scope>
            </div>
          )}
          {frontmatter.project_scope && (
            <div>
              <PostDetailsTitle>Scope</PostDetailsTitle>
              <Scope>
                {frontmatter.project_scope.map(item => (
                  <ScopeItem key={item}>{item}</ScopeItem>
                ))}
              </Scope>
            </div>
          )}
        </PostDetails>
      )}

      <Content>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Content>
      <Break />
      <SuggestedPost next={next} previous={previous} />
    </div>
  )
}

const SuggestedPost = ({ next, previous }) => (
  <SuggestedContainer>
    {previous && (
      <ThemeProvider theme={{ direction: 'left' }}>
        <SPLink
          to={`/${previous.parent.sourceInstanceName}/${previous.parent.name}`}
        >
          <Details>
            <DetailTitle>Previous</DetailTitle>
            <Detail>{previous.fields.short_name}</Detail>
            <Detail>{previous.fields.scope}</Detail>
          </Details>
          <PostTitle>{previous.fields.title}</PostTitle>
        </SPLink>
      </ThemeProvider>
    )}
    {next && (
      <ThemeProvider theme={{ direction: 'right' }}>
        <SPLink to={`/${next.parent.sourceInstanceName}/${next.parent.name}`}>
          <Details>
            <Detail>{next.fields.short_name}</Detail>
            <Detail>{next.fields.scope}</Detail>
            <DetailTitle>Up next</DetailTitle>
          </Details>
          <PostTitle>{next.fields.title}</PostTitle>
        </SPLink>
      </ThemeProvider>
    )}
  </SuggestedContainer>
)

// Styles

const SuggestedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 1.25rem;
  ${maxWidth};
`

const DetailTitle = styled(Detail)`
  position: relative;
  color: var(--black);
  &::before {
    content: ${props =>
      props.theme.direction === 'left' ? `' \\2190'` : `' \\2192'`};
    position: absolute;
    left: ${props => (props.theme.direction === 'left' ? '0' : 'unset')};
    right: ${props => (props.theme.direction === 'left' ? 'unset' : '0')};
    transform: translateX(
      ${props => (props.theme.direction === 'left' ? '-1.25rem' : '1.25rem')}
    );
    transition: transform 0.15s var(--ease);
  }
`

const SPLink = styled(Link)`
  color: var(--black);
  background: ${props =>
    props.theme.direction === 'right' ? 'var(--lightgray)' : 'none'};
  padding: ${props => (props.theme.direction === 'right' ? '20px' : '20px 0')};
  outline: none;

  @media (min-width: ${screenmd + 1}px) {
    &:hover,
    &:active,
    &:focus {
      ${DetailTitle} {
        &::before {
          transform: translateX(
            ${props =>
              props.theme.direction === 'left' ? '-1.5625rem' : '1.5625rem'}
          );
        }
      }
      ${PostTitle} {
        text-decoration: underline;
      }
    }
  }
`

const Title = styled.h1`
  font-size: var(--fontxxl);
  font-family: var(--titlefont);
  font-weight: var(--fontlight);
  margin-top: 60px;
  margin-bottom: 10px;
  ${maxWidth}
`

const Info = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-auto-columns: max-content;
  ${maxWidth}
  > li:not(:last-of-type)::after {
    content: '·';
    padding-left: 10px;
  }
`

const Break = styled(SectionBreak)`
  margin-left: 20%;
  @media (max-width: ${screenmd}px) {
    margin-left: initial;
  }
`

const InfoItem = styled.li`
  list-style: none;
  color: var(--gray);
  text-transform: uppercase;
`

const PostDetails = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-gap: 40px;
  padding-bottom: 40px;
  ${maxWidth};

  @media (max-width: ${screenmd}px) {
    grid-template-columns: 1fr;
  }
`

const PostDetailsTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: var(--fontsm);
  font-family: var(--titlefont);
  text-transform: uppercase;
`

const Scope = styled.ul`
  display: grid;
  grid-gap: 10px;
`

const ScopeItem = styled.li`
  font-weight: var(--fontlight);
  font-size: var(--fontmd);
  list-style: none;
`

const Content = styled.section`
  padding-bottom: 40px;
  max-width: var(--contentmaxwidth);
  margin: auto;
  font-size: var(--fontmd);
  font-weight: var(--fontlight);

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--titlefont);
  }
  ul {
    padding-left: 1.25rem;
    margin: initial;
  }
  a {
    color: var(--red);
    font-weight: var(--fontregular);

    @media (min-width: ${screenmd + 1}px) {
      outline: none;
      &:hover,
      &:active,
      &:focus {
        opacity: 0.5;
      }
    }
  }
  em {
    font-weight: var(--fontregular);
  }
`
