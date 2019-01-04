import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { screenmd, SectionBreak } from '../components/shared/styles'

export default function Template(props) {
  const { pageContext } = props
  const { frontmatter, html } = pageContext

  return (
    <>
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
                <ScopeItem>{frontmatter.background}</ScopeItem>
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
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

const maxWidth = css`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${screenmd}px) {
    max-width: 100%;
  }
`

// Styles
const Title = styled.h1`
  font-size: var(--fontxxl);
  font-family: var(--titlefont);
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
  ${maxWidth};
  margin: auto;
`
