import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import image1 from '../../../images/dummy_image_1.jpg'
import image2 from '../../../images/dummy_image_2.jpg'
import image3 from '../../../images/dummy_image_3.jpg'
import image4 from '../../../images/dummy_image_4.jpg'
import image5 from '../../../images/dummy_image_5.jpg'
import image6 from '../../../images/dummy_image_6.jpg'
import image7 from '../../../images/dummy_image_7.jpg'
import image8 from '../../../images/dummy_image_8.jpg'

import { IconExit, LaptopPlain } from './shared'
import { screensm } from '../../shared/styles'

const posts = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
  { url: image8 },
]

export default React.memo(function() {
  return (
    <DashboardContainer>
      <div>
        <Layout>
          <Sidebar>
            <h5>Dashboard</h5>
            <ul className="menu-items">
              <li>Jobs</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Users</li>
            </ul>
            <div className="menu-footer">
              <span />
              <span />
              <span />
              <span />
            </div>
          </Sidebar>
          <Body>
            <Searchbar>
              <span>Type to search</span>
              <IconBell />
              <Profile>
                <span />
                <span>Shay Johnson</span>
                <span />
              </Profile>
            </Searchbar>
            <h5>Edit Blog</h5>
            <Content>
              {posts.map(post => (
                <Post key={post.url} url={post.url} />
              ))}
            </Content>
          </Body>
        </Layout>
        <Modal>
          <ModalHeader>
            <IconExit />
            <div>Blog Editor</div>
          </ModalHeader>
          <ModalImage url={posts[2].url} />
          <ModalText>
            {Array.from(Array(8)).map((i, index) => (
              <span key={index} />
            ))}
          </ModalText>
        </Modal>
      </div>
    </DashboardContainer>
  )
})

const Post = ({ url }) => (
  <PostContainer>
    <PostImage url={url} />
    <PostText>
      <span />
      <span />
      <span />
      <span />
    </PostText>
  </PostContainer>
)

const DashboardContainer = ({ children }) => (
  <Container>
    <LaptopPlain>{children}</LaptopPlain>
  </Container>
)

// Styles
const Container = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: auto;
`

const bounceInOut = keyframes`
  35% {
    opacity: 0;
    transform: translate(-50%, 50px);
  }
  45% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  85% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  95% {
    opacity: 0;
    transform: translate(-50%, 50px);
  }
`

const Modal = styled.div`
  position: absolute;
  top: 12%;
  left: 50%;
  right: 50%;
  width: 50%;
  padding: 10px;
  background: #fff;
  border-radius: var(--illustrationborderradius);
  box-shadow: var(--illustrationboxshadow);
  opacity: 0;
  transform: translate(-50%, 50px);
  z-index: 1;
  animation: ${bounceInOut} 10s var(--illustrationease) infinite;
  animation-delay: -2.5s;

  @media (max-width: ${screensm}px) {
    width: 70%;
  }
`

const ModalHeader = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: var(--fontbold);
  border-bottom: 1px solid #eee;
`

const ModalImage = styled.div`
  height: 100px;
  width: 100%;
  background: ${props => (props.url ? `url(${props.url})` : '#eee')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10px;
`

const ModalText = styled.div`
  margin-top: 10px;
  display: grid;
  grid-gap: 8px;

  > span {
    border-radius: 2px;
  }
  > span:nth-of-type(odd) {
    height: 5px;
    width: 30%;
    background: rgba(34, 34, 49, 0.4);
  }
  > span:nth-of-type(even) {
    height: 20px;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
  }
`

const blur = keyframes`
  35% {
    filter: blur(0);
  }
  45% {
    filter: blur(2px);
  }
  85% {
    filter: blur(2px);
  }
 
  95% {
    filter: blur(0);
  }
`

const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  max-height: 400px;
  will-change: filter;
  animation: ${blur} 10s var(--illustrationease) infinite;
  animation-delay: -2.5s;
  overflow: hidden;
`

const Sidebar = styled.div`
  position: relative;
  border-right: 1px solid #f7f7f7;
  box-shadow: rgba(188, 193, 217, 0.12) 0px 1px 3px,
    rgba(188, 193, 217, 0.25) 0px 5px 12px;
  max-height: inherit;

  > h5 {
    padding: 8px 10px;
    margin: 0;
    font-size: 10px;
    font-weight: var(--fontbold);
    color: rgb(34, 34, 49);
  }
  > .menu-items {
    font-size: 8px;
    > li {
      position: relative;
      padding: 5px 10px;
      border-bottom: 1px solid #f7f7f7;
    }

    > li:first-of-type {
      border-top: 1px solid #f7f7f7;
    }

    > li:nth-of-type(2) {
      color: rgb(0, 122, 255);
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-left: 2px solid rgba(0, 122, 255);
      }
    }
  }

  > .menu-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    display: grid;
    grid-gap: 5px;

    > span {
      height: 2px;
      width: 100%;
      background: #eee;
    }
  }
`

const Body = styled.div`
  overflow: hidden;

  > h5 {
    font-size: 8px;
    font-weight: var(--fontbold);
    padding: 5px 10px;
    margin-top: 10px;
  }
`

const Searchbar = styled.div`
  display: grid;
  grid-template-columns: auto 19px max-content;
  align-items: center;
  height: 20px;
  box-shadow: rgba(188, 193, 217, 0.12) 0px 1px 3px,
    rgba(188, 193, 217, 0.25) 0px 5px 12px;

  > span {
    padding: 5px 8px;
    font-size: 8px;
    opacity: 0.1;
  }
`

const IconBell = styled.div`
  justify-self: center;
  color: rgb(231, 236, 243);
  position: relative;
  width: 8px;
  height: 10px;
  background-color: currentcolor;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: currentcolor;
  border-image: initial;
  border-radius: 0.3125rem 0.3125rem 0px 0px;
  transform: scale(0.7) translateY(-1px);
  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    bottom: -4px;
    left: 1px;
    width: 2px;
    height: 2px;
    background-color: currentcolor;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: currentcolor;
    border-image: initial;
  }

  &::after {
    bottom: -1px;
    left: -4px;
    width: 14px;
    height: 0px;
    border-top: 1px solid currentcolor;
    border-bottom: 1px solid white;
  }
`

const Profile = styled.div`
  display: grid;
  padding: 5px 8px;
  grid-auto-flow: column;
  grid-gap: 5px;
  align-items: center;
  > span {
    font-size: 5px;
    opacity: 0.8;
  }
  > span:first-of-type {
    height: 9px;
    width: 9px;
    border-radius: 50%;
    background: rgb(231, 236, 243);
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 5px;
  padding: 0 10px 10px 10px;
`

const PostContainer = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 1px;
  overflow: hidden;
`

const PostImage = styled.div`
  padding-top: 66%;
  background: ${props => (props.url ? `url(${props.url})` : '#eee')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: -10px;
`

const PostText = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 5px;
  > span {
    height: 3px;
    width: 100%;
    background: #eee;
  }
`
