import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { Laptop } from './shared'

export default React.memo(() => (
  <Laptop text="https://avresources.co/services/forms" noheader>
    <Banner>
      <BannerText>
        <h3>Forms</h3>
        {Array.from(Array(4)).map((i, index) => (
          <span key={index} />
        ))}
      </BannerText>
      <BannerLaptop>
        <Laptop text="https://avresources.co/services/forms" noheader small>
          <TopNav />
          <Layout>
            <MyTags>
              <Tag>
                <span />
                <span />
                <span />
              </Tag>
              <Tag className="fade-up">
                <span />
                <span />
                <span />
              </Tag>
            </MyTags>
            <Editor>
              <div />
              <Description>
                {Array.from(Array(10)).map((i, index) => (
                  <span key={index} />
                ))}
              </Description>
              <Options>
                {Array.from(Array(10)).map((i, index) => (
                  <Option key={index}>
                    <span />
                    <span />
                  </Option>
                ))}
              </Options>
            </Editor>
          </Layout>
        </Laptop>
      </BannerLaptop>
    </Banner>

    <About>
      {Array.from(Array(3)).map((i, index) => (
        <AboutItem key={index}>
          <span />
          <span />
          <span />
        </AboutItem>
      ))}
    </About>
  </Laptop>
))

// Styles
const Banner = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-gap: 20px;
  height: 200px;
  position: relative;
  perspective: 2000px;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0px;
    right: -1px;
    height: 200px;
    transform: skewY(-8deg);
    transform-origin: 0px 0px 0px;
    z-index: -1;
    background: rgb(246, 249, 252);
  }
`

const BannerText = styled.div`
  align-self: start;
  margin-top: 40px;
  padding-left: 40px;
  display: grid;
  grid-gap: 5px;
  > h3 {
    font-weight: var(--fontbold);
    font-size: 15px;
    font-family: var(--illustrationavfont);
    color: rgb(34, 34, 49);
  }
  > span {
    height: 5px;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
  }

  > span:nth-of-type(4) {
    width: 30%;
  }

  > span:last-of-type {
    width: 25%;
    background: rgb(103, 114, 229);
    margin-top: 10px;
  }
`

const BannerLaptop = styled.div`
  align-self: center;
  height: 150px;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 27.1px 62.5px 100px -35px rgba(50, 50, 93, 0.5),
    16.2px 37.5px 75px -100.5px rgba(0, 0, 0, 0.6);
  transform: rotateY(-30deg) rotateX(3deg) translateX(-15px);
  overflow: hidden;
`

const TopNav = styled.div`
  position: relative;
  height: 8px;
  background: rgb(246, 249, 252);
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: rgb(103, 114, 229);
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 10px;
  align-items: start;
  padding: 10px;
`

const fadeup = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 0; 
    transform: translateY(-3px);
  }
`

const MyTags = styled.div`
  display: grid;
  grid-gap: 5px;
  > div {
    height: 30px;
    width: 100%;
    background: rgba(14, 197, 199, 0.04);
    border: 1px solid rgba(14, 197, 199, 0.5);
    border-radius: 1px;
  }

  .fade-up {
    opacity: 0;
    animation: ${fadeup} 5s infinite var(--illustrationease);
  }
`

const Tag = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  padding: 5px;

  > span {
    height: 10px;
    background: #f3f3f3;
  }

  > span:first-of-type {
    height: 3px;
  }

  > span:nth-of-type(2) {
    grid-column: 1;
    grid-row: 2;
  }

  > span:nth-of-type(3) {
    grid-column: 2;
    grid-row: 2;
  }
`

const Editor = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 5px;

  > div:first-of-type {
    grid-column: 1 / span 2;
    height: 8px;
    width: 100%;
    border-radius: 1px;
    border: 1px solid #eee;
  }

  > div:nth-of-type(2) {
    height: 100px;
    width: 100%;
  }
`

const Description = styled.div`
  background: #fffaf8;
  padding: 5px;
  display: grid;
  grid-gap: 2px;
  align-items: start;
  > span {
    height: 2px;
    width: 100%;
    background: #eee;
  }
`

const Options = styled.div`
  display: grid;
  grid-gap: 10px;
  align-items: start;
`

const Option = styled.div`
  height: 20px;
  border: 1px solid #eee;
  border-radius: 1px;
  display: grid;
  grid-gap: 2px;
  padding: 5px;
  > span {
    height: 2px;
    width: 100%;
    background: #eee;
  }
`

const About = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  max-width: 70%;
  margin: auto;

  > div:nth-of-type(2) {
    grid-column: 2;
    grid-row: 2;
  }
  > div:nth-of-type(3) {
    grid-column: 1;
    grid-row: 3;
  }
`

const AboutItem = styled.div`
  position: relative;
  display: grid;
  grid-gap: 5px;
  padding-left: 20px;
  & > span {
    height: 3px;
    width: 100%;
    background: #eee;
  }

  & > span:first-of-type {
    width: 40%;
    background: rgb(103, 114, 229);
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: rgb(255, 162, 123);
  }
`
