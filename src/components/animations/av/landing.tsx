import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

// @ts-ignore
import caretLarge from '../../../images/caret_large.svg'
import { screenmd } from '../../shared/styles'

import { Laptop } from './shared'

const Landing = React.memo(() => (
  <Container>
    <Laptop>
      <Banner>
        <BannerGrid>
          {Array.from(Array(6)).map((item, index) => (
            <span key={index} />
          ))}
          <BannerArrows>
            {Array.from(Array(3)).map((item, index) => (
              <span key={index} />
            ))}
          </BannerArrows>
        </BannerGrid>
        <BannerText>
          {Array.from(Array(5)).map((item, index) => (
            <span key={index} />
          ))}
        </BannerText>
      </Banner>
      <About>
        {Array.from(Array(3)).map((item, index) => (
          <span key={index} />
        ))}
      </About>
    </Laptop>
  </Container>
))

Landing.displayName = 'Landing'
export default Landing

const Container = styled.div`
  margin: auto;
  max-width: 800px;
  width: 100%;
  overflow: hidden;
  @media (max-width: ${screenmd}px) {
    width: 600px;
  }
`

const Banner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  height: 300px;
  overflow: hidden;
`

const BannerGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: inherit;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(0px, 100px);
  transform: skewY(-8deg);
  transform-origin: 0px 0px 0px;
  background: linear-gradient(90deg, rgb(34, 34, 49), rgb(7, 15, 39));
  overflow: hidden;
  > span {
    display: block;
    min-height: 40px;
    width: 100%;
  }
  > span:first-of-type {
    grid-column: 1 / span 4;
    grid-row: 5 / span 2;
    background: linear-gradient(90deg, #182c53, #171a2d);
  }
  > span:nth-of-type(2) {
    grid-row: 7;
    grid-column: 1 / span 2;
    background: linear-gradient(90deg, #13274a, #1c1e30);
  }
  > span:nth-of-type(3) {
    grid-column: 1 / span 6;
    grid-row: 3 / span 2;
    background: linear-gradient(90deg, #11152b, #1a2540);
  }
  > span:nth-of-type(4) {
    grid-column: 8 / span 3;
    grid-row: 6 / span 2;
    background: linear-gradient(90deg, #11152b, #1a2540);
  }
  > span:nth-of-type(5) {
    grid-row: 1 / span 2;
    grid-column: 1 / span 10;
    background: linear-gradient(90deg, #11162c, #18233d);
  }
  > span:nth-of-type(6) {
    grid-row: 3 / span 2;
    grid-column: span 4;
    background: linear-gradient(90deg, #1a223b, #081027);
  }
`

const BannerText = styled.div`
  display: grid;
  align-self: center;
  grid-gap: 15px;
  padding: 20px;
  > span {
    border-radius: 1px;
    height: 5px;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }
  > span:first-of-type {
    height: 3px;
    width: 20%;
    background: rgb(143, 239, 251);
  }
  > span:nth-of-type(2) {
    width: 60%;
    background: #fff;
  }
  > span:last-of-type {
    width: 80%;
  }
`

const About = styled.div`
  position: relative;
  display: grid;
  grid-gap: 8px;
  max-width: 50%;
  margin: auto;
  padding: 40px;
  > span {
    width: 100%;
    justify-self: center;
    height: 8px;
    background: rgb(238, 238, 238);
    border-radius: 2px;
  }
  > span:last-of-type {
    width: 80%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    background: rgb(255, 162, 123);
    height: 30px;
    width: 30px;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`

const animationRotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`

const BannerArrows = styled.div`
  position: absolute;
  top: 19%;
  right: 10%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 350px;
  width: 350px;
  transform: skewY(8deg);
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    display: grid;
    background: linear-gradient(to left, rgb(43, 85, 101), rgb(34, 59, 109));
    -webkit-mask: url(${caretLarge}) center center / contain no-repeat;
    animation: ${animationRotate} 120s linear 0s infinite normal none running;
  }
  & > span {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: linear-gradient(90deg, rgb(133, 216, 255), rgb(79, 239, 255))
      center center no-repeat;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    grid-column: 4 / auto;
    grid-row: 4 / auto;
  }
  & > span:first-of-type {
    transform: translate(0px, -46px);
    background: linear-gradient(90rad, rgb(19, 219, 255), rgb(70, 255, 229));
  }
  & > span:nth-of-type(2) {
    transform: translate(-46px, 46px) scale(0.9);
    background: linear-gradient(90rad, rgb(38, 186, 255), rgb(155, 255, 218));
  }
  & > span:last-of-type {
    transform: translate(46px, 46px) scale(0.9);
    background: linear-gradient(90deg, rgb(133, 216, 255), rgb(79, 239, 255));
  }
`
