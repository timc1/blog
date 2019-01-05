import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { screenlg, maxWidth } from '../shared/styles'

export default ({ pre, title, description, postTitle, post }) => (
  <Container>
    <Pre>{pre}</Pre>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {postTitle && <PostTitle>{postTitle}</PostTitle>}
    {post && <Post>{post}</Post>}
  </Container>
)

// Styles

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px auto 150px;
  grid-gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  ${maxWidth};

  @media (max-width: ${screenlg}px) {
    grid-template-columns: minmax(50px, auto) auto;
  }
`

const headerStyles = css`
  font-size: var(--fontsm);
  text-transform: uppercase;
`

const Pre = styled.p`
  margin: 0;
  ${headerStyles};
`

const Title = styled.h3`
  margin: 0;
  ${headerStyles};
`

const Description = styled.p`
  grid-column: 2;
  margin: 0;
  font-size: var(--fontmd);
  font-weight: var(--fontlight);

  @media (max-width: ${screenlg}px) {
    grid-column: 2;
  }
`

const PostTitle = styled(Title)`
  grid-column: 3;
  grid-row: 1;
  @media (max-width: ${screenlg}px) {
    grid-column: 2;
    grid-row: initial;
  }
`

const Post = styled.div`
  grid-column: 3;
  @media (max-width: ${screenlg}px) {
    grid-column: 2;
  }

  ul {
    display: grid;
    grid-gap: 10px;
    font-size: var(--fontmd);
    font-weight: var(--fontlight);
  }

  li {
    list-style: none;
  }
`
