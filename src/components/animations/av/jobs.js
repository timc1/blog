import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { Laptop } from './shared'

export default React.memo(() => (
  <Laptop text="https://avresources.co/services/jobs" noheader>
    <Banner>
      <BannerText>
        <h3>Jobs</h3>
        {Array.from(Array(4)).map((i, index) => (
          <span key={index} />
        ))}
      </BannerText>
      <BannerLaptop>
        <Laptop text="https://avresources.co/services/jobs" noheader small>
          <Header>
            <MyApps>
              {Array.from(Array(3)).map((i, index) => (
                <App key={index}>
                  <span />
                  <span />
                  <span />
                </App>
              ))}
            </MyApps>
            <AllApps>
              {Array.from(Array(10)).map((i, index) => (
                <App key={index}>
                  <span />
                  <span />
                  <span />
                  <Button />
                </App>
              ))}
            </AllApps>
          </Header>
        </Laptop>
      </BannerLaptop>
    </Banner>
    <About>
      <span />
      <span />
    </About>
    <Services>
      <span />
      <span />
      <div>
        {Array.from(Array(5)).map((i, index) => (
          <span key={index} />
        ))}
      </div>
      <div>
        {Array.from(Array(5)).map((i, index) => (
          <span key={index} />
        ))}
      </div>
    </Services>
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
    right: 0px;
    height: 200px;
    transform: skewY(-8deg);
    transform-origin: 0px 0px 0px;
    z-index: -1;
    background: linear-gradient(90deg, rgb(24, 24, 49), rgb(33, 33, 48));
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
    color: #fff;
  }
  > span {
    height: 5px;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
  }

  > span:first-of-type {
    width: 30%;
    background: #fff;
  }

  > span:nth-of-type(4) {
    width: 80%;
  }

  > span:last-of-type {
    width: 25%;
    background: rgb(0, 122, 255);
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

const Header = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-gap: 10px;
  align-items: start;
  padding: 10px;
`

const MyApps = styled.div`
  display: grid;
  grid-gap: 10px;
`

const App = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 1px;
  box-shadow: rgba(188, 193, 217, 0.12) 0px 1px 3px,
    rgba(188, 193, 217, 0.25) 0px 5px 12px;
  display: grid;
  grid-gap: 2px;
  padding: 5px;

  > span {
    height: 2px;
    width: 100%;
    background: #eee;
  }
`

const scroll = keyframes`
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-200px)
  }
  80% {
    transform: translateY(0)
  }
`

const AllApps = styled(MyApps)`
  animation: ${scroll} 10s ease infinite;
`

const Button = styled.div`
  height: 3px;
  width: 20%;
  background: rgb(0, 122, 255);
`

const About = styled.div`
  position: relative;
  display: grid;
  grid-gap: 3px;
  padding: 10px 10px 25px 25px;
  max-width: 150px;
  margin: auto;
  > span {
    height: 3px;
    width: 100%;
    background: rgba(34, 34, 49, 0.3);
  }
  > span:last-of-type {
    width: 80%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    height: 15px;
    width: 15px;
    background: rgb(100, 255, 186);
    border-radius: 50%;
  }
`

const Services = styled.div`
  max-width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-gap: 5px;

  > span {
    height: 5px;
    width: 30%;
    border-radius: 1px;
    background: #eee;
  }

  > div {
    height: 40px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px 10px 0 10px;
    display: grid;
    align-items: start;
    grid-gap: 3px;

    > span {
      height: 3px;
      width: 100%;
      background: #eee;
      border-radius: 1px;
    }
  }
`
