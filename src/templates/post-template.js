import React from 'react'
import styled from '@emotion/styled'

import { screenmd, maxWidth, SectionBreak } from '../components/shared/styles'

import SEO from '../components/shared/seo'

export default function Template(props) {
  const { pageContext, children } = props
  const { frontmatter } = pageContext

  return (
    <>
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
                {frontmatter.project_scope.split(',').map(item => (
                  <ScopeItem key={item}>{item}</ScopeItem>
                ))}
              </Scope>
            </div>
          )}
        </PostDetails>
      )}

      <Content>{children}</Content>
    </>
  )
}

// Styles
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
  list-style: none;
`

const Content = styled.section`
  padding: 40px 0;
  margin: auto;
`
