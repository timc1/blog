import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { Laptop, IconFacebook, IconTwitter, IconLinkedIn } from './shared'
import dummyImage4 from '../../../images/dummy_image_4.jpg'

const theme = {
  isOverlay: true,
}

export default React.memo(function() {
  return (
    <Laptop text="https://avresources.co/blog" noheader>
      <Layout className="blog-layout">
        <Banner>
          <span className="vertical-lr">View All Entries</span>
          <BannerImage url={dummyImage4} />
          <span className="vertical-rl">Home</span>
        </Banner>
        <Body>
          <Title>A Framework Built To Last</Title>
          <Author>Written by Emily S.</Author>
          <Social>
            <IconFacebook />
            <IconTwitter />
            <IconLinkedIn />
          </Social>
          <TextContent>
            {Array.from(Array(20)).map((i, index) => (
              <span key={index} />
            ))}
          </TextContent>
        </Body>

        <Footer>
          <FooterContent>
            <FooterColumn>
              <span className="logo">AVRC</span>
            </FooterColumn>
            {Array.from(Array(3)).map((i, index) => (
              <FooterColumn key={index}>
                <span />
                <span />
                <span />
                <span />
              </FooterColumn>
            ))}
          </FooterContent>
        </Footer>
      </Layout>
      <ThemeProvider theme={theme}>
        <ScrollOverlay className="blog-scroll-overlay">
          <div>
            <Title>A Framework Built To Last</Title>
            <Author>Written by Emily S.</Author>
          </div>
          <Social>
            <IconFacebook />
            <IconTwitter />
            <IconLinkedIn />
          </Social>
        </ScrollOverlay>
      </ThemeProvider>
    </Laptop>
  )
})

const scrollUpDown = keyframes`
  35% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(-160px)
  }
  85% {
    transform: translateY(-160px)
  }
  95% {
    transform: translateY(0)
  }
`

const scrollDownUp = keyframes`
  35% {
    transform: translateY(-100px);
  }
  45% {
    transform: translateY(0)
  }
  85% {
    transform: translateY(0)
  }
  95% {
    transform: translateY(-100px)
  }
`

const ScrollOverlay = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  padding: 15px 20px;
  background: #fff;
  box-shadow: rgba(188, 193, 217, 0.12) 0px 1px 3px,
    rgba(188, 193, 217, 0.25) 0px 5px 12px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  transform: translateY(-100px);
  animation: ${scrollDownUp} 10s ease-in infinite;
  animation-delay: -1.5s;
`

const Layout = styled.div`
  max-height: 350px;
  transform: translateY(0);
  animation: ${scrollUpDown} 10s ease-in-out infinite;
  animation-delay: -1.5s;
`

const Banner = styled.div`
  height: 120px;
  background: #fff;
  display: grid;
  grid-template-columns: minmax(10px, 6%) auto minmax(10px, 6%);

  .vertical-lr,
  .vertical-rl {
    display: flex;
    place-content: center;
    align-items: center;
    font-size: 6px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .vertical-lr {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }

  .vertical-rl {
    writing-mode: vertical-rl;
  }
`

const BannerImage = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => (props.url ? `url(${props.url})` : '#eee')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Body = styled.div`
  max-width: 60%;
  margin: auto;
  padding-top: 20px;
`

const Title = styled.h5`
  font-size: ${props => (props.theme.isOverlay ? '10px' : '18px')};
  font-family: var(--illustrationavfont);
  font-weight: var(--fontbold);
  text-align: ${props => (props.theme.isOverlay ? 'left' : 'center')};
  margin: 0;
`

const Author = styled.p`
  font-size: 6px;
  text-transform: uppercase;
  color: rgb(0, 122, 255);
  letter-spacing: 1px;
  margin-top: 5px;
  text-align: ${props => (props.theme.isOverlay ? 'left' : 'center')};
`

const Social = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
  grid-auto-columns: max-content;
  place-content: center;
  transform: scale(0.4);
`

const TextContent = styled.div`
  display: grid;
  grid-gap: 8px;
  > span {
    display: block;
    height: 3px;
    background: #eee;
    border-radius: 1px;
  }
`

const Footer = styled.div`
  height: 200px;
  background: rgb(34, 34, 49);
  margin-top: 20px;
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 0.5fr repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 70%;
  margin: auto;
`

const FooterColumn = styled.div`
  display: grid;
  grid-gap: 8px;
  padding: 20px 0;
  > span {
    background: rgba(231, 236, 243, 0.4);
  }
  > span:first-of-type {
    background: rgb(107, 124, 147);
  }

  .logo {
    width: 80%;
    background: none !important;
    font-size: 10px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
    color: #fff;
  }
`
