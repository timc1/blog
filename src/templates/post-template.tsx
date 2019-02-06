import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { screenmd, maxWidth } from '../components/shared/styles'

import SEO from '../components/shared/seo'

// @ts-ignore
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Link, graphql } from 'gatsby'

import { PostTitle, Details, Detail } from '../pages/index'

import useScrollAnimation from '../components/shared/hooks/useScrollAnimation'

//type TemplateProps = {
//  pageContext: any
//  data: any
//}

const Template = ({ pageContext, data }) => {
  const { next, previous } = pageContext

  const { mdx } = data
  const { frontmatter } = mdx

  useScrollAnimation()

  return (
    <div className="blur-me">
      <SEO
        title={frontmatter.title}
        description={frontmatter.seo_description}
        keywords={frontmatter.categories}
      />
      {frontmatter.banner_image && (
        <BannerImage
          src={frontmatter.banner_image}
          alt={frontmatter.banner_image_alt}
        />
      )}
      <Title>{frontmatter.title}</Title>
      <Info>
        <InfoItem>{frontmatter.short_name}</InfoItem>
        <InfoItem>{frontmatter.scope}</InfoItem>
      </Info>
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
      <SuggestedPost next={next} previous={previous} />
    </div>
  )
}

const SuggestedPost = ({ next, previous }) => (
  <SuggestedContainer>
    {previous && (
      <ThemeProvider theme={{ direction: 'left' }}>
        <SPLink to={`/${previous.parent.name}`}>
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
        <SPLink to={`/${next.parent.name}`}>
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
  max-width: 1200px;
  margin: 100px auto 0 auto;
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
  position: relative;
  color: var(--black);
  background: ${props =>
    props.theme.direction === 'right' ? 'var(--lightgray)' : 'var(--white)'};
  padding: ${props => (props.theme.direction === 'right' ? '20px' : '20px 0')};
  outline: none;

  @media (min-width: ${screenmd + 1}px) {
    padding: ${props =>
      props.theme.direction === 'right' ? '40px' : '40px 0'};
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
      ${DetailTitle} {
        &::before {
          transform: translateX(
            ${props =>
              props.theme.direction === 'left' ? '-1.5625rem' : '1.5625rem'}
          );
        }
      }
    }
  }
`

const bannerImage = keyframes`
  to {
    opacity: .4; 
  }
`

const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 375px;
  width: 100%;
  margin-top: -120px;
  background: url(${props => props.src || ''}) no-repeat top;
  background-size: cover;
  opacity: 0;
  zindex: -1;
  pointer-events: none;
  user-select: none;
  animation: ${bannerImage} 0.4s var(--ease);
  animation-fill-mode: forwards;
  animation-delay: 0.8s;

  @media (max-width: ${screenmd}px) {
    margin-top: -60px;
    height: 300px;
  }
`

const fadein = keyframes`
  to {
    opacity: 1;
    transform: translateY(0); 
  }
`

const scalein = keyframes`
  to {
    transform: scaleX(1) 
  }
`

const Title = styled.h1`
  font-size: var(--fontxxl);
  font-family: var(--titlefont);
  font-weight: var(--fontlight);
  margin-top: 120px;
  margin-bottom: 10px;
  ${maxWidth}
  opacity: 0;
  transform: translateY(10px);
  transform-origin: 100% 0;
  animation: ${fadein} 0.6s var(--ease);
  animation-fill-mode: forwards;
  animation-delay: 0.2s;

  @media (max-width: ${screenmd}px) {
    margin-top: 60px;
  }
`

const Info = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-auto-columns: max-content;
  ${maxWidth}
  padding-bottom: 40px;
  > li:not(:last-of-type)::after {
    content: '·';
    padding-left: 10px;
  }
  opacity: 0;
  transform: translateY(5px);
  transform-origin: 100% 0;
  animation: ${fadein} 0.6s var(--ease);
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
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
  padding-top: 40px;
  padding-bottom: 40px;
  ${maxWidth};

  @media (max-width: ${screenmd}px) {
    grid-template-columns: 1fr;
  }

  transform: translateY(10px);
  opacity: 0;
  transition-property: transform, opacity;
  animation: ${fadein} 0.6s var(--ease);
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
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
  position: relative;
  max-width: var(--contentmaxwidth);
  margin: auto;
  font-size: var(--fontmd);
  font-weight: var(--fontlight);
  color: var(--darkgray);
  //opacity: 0;
  //transform: translateY(40px);
  //transform-origin: 100% 0;
  //animation: ${fadein} 1s var(--cubic);
  //animation-fill-mode: forwards;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--titlefont);
    color: var(--black);
  }
  ul {
    padding-left: 1.25rem;
    margin: initial;
  }
  hr {
    background-color: var(--lightgray);
    border: 0;
    height: .25em;
    margin: 24px 0;
    padding: 0;
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
        banner_image
        banner_image_alt
      }
      code {
        body
      }
    }
  }
`

export default Template
