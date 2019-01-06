import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import caret from '../../../images/caret.svg'
import { Laptop } from './shared'

export default React.memo(() => (
  <Laptop text="https://avresources.co/services/consulting" noheader>
    <Banner>
      <BannerGrid>
        {Array.from(Array(6)).map((i, index) => (
          <span key={index} />
        ))}
      </BannerGrid>
      <Header>
        <h3>Consulting</h3>
        <span />
        <span />
      </Header>
      <Animation>
        <div />
        <div />
        <div />
      </Animation>
    </Banner>
    <Services>
      {Array.from(Array(2)).map((i, index) => (
        <Service key={index}>
          <div />
          <div>
            <span />
            <span />
            <span />
          </div>
        </Service>
      ))}
    </Services>
  </Laptop>
))

const Banner = styled.div`
  position: relative;
  height: 200px;
`

const BannerGrid = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  transform: skewY(-8deg);
  transform-origin: 0px 0px 0px;
  background: linear-gradient(90rad, rgb(41, 51, 95), rgb(76, 97, 181));

  > span {
    height: 100%;
    min-height: 50px;
  }
  > span:first-of-type {
    grid-row: 3 / span 2;
    grid-column: 1 / span 2;
    background: linear-gradient(224deg, #2d375f 25%, #354171);
  }
  > span:nth-of-type(2) {
    background: linear-gradient(-265deg, #2c5384 -33%, #3a4889 100%);
    grid-column: 1 / span 3;
    grid-row: 5 / span 2;
  }
  > span:nth-of-type(3) {
    grid-row: 1 / span 2;
    grid-column: 1 / span 8;
    background: linear-gradient(
      to left,
      rgba(45, 55, 95, 0.2784313725490196),
      #313c6d
    );
  }
  > span:nth-of-type(4) {
    background: linear-gradient(90rad, #2d375f, #3f5096);
    grid-row: span 2;
    grid-column: span 3;
  }
  > span:nth-of-type(5) {
    background: linear-gradient(90rad, #4456a2, #41539b);
    grid-column: span 2;
    grid-row: span 3;
  }
  > span:nth-of-type(6) {
    background: linear-gradient(90rad, #3a4888, #4456a2);
    grid-row: 5 / span 2;
    grid-column: span 3;
  }
`

const Header = styled.div`
  position: relative;
  max-width: 40%;
  margin: auto;
  padding-top: 40px;
  display: grid;
  grid-gap: 5px;
  z-index: 1;

  & > h3 {
    margin: 0;
    text-align: center;
    color: #fff;
    text-shadow: rgba(0, 0, 0, 0.1) 2px 2px;
    font-family: var(--illustrationavfont);
    font-weight: var(--fontregular);
  }

  & > span {
    height: 5px;
    width: 100%;
    background: rgb(143, 239, 251);
    justify-self: center;
    border-radius: 1px;
  }

  & > span:last-of-type {
    width: 80%;
  }
`

const moveMask = keyframes`
  to {
    -webkit-mask-position: 221px
  }
`

const Animation = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));
  grid-auto-rows: 35px;
  grid-auto-flow: dense;
  place-items: center;
  max-width: 105px;
  width: 100%;
  margin: 30px auto;
  padding: 0px;
  z-index: 1;

  & > div {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    &::before {
      content: '';
      position: absolute;
      height: 8px;
      width: 100%;
      z-index: -1;
      transform: rotate(40deg) scale(0.8);
      mask: url(${caret});
      background: linear-gradient(
        100grad,
        rgb(25, 202, 255),
        rgb(65, 255, 220)
      );
      -webkit-mask: url(${caret}) 210px center;
      -webkit-mask-position: 210px center;
      animation: ${moveMask} 0.5s linear 0s infinite normal none running;
    }
  }

  & > div:first-of-type {
    background: linear-gradient(90deg, rgb(76, 96, 180), rgb(87, 114, 226));

    &::before {
      top: 35px;
      left: 6%;
      transform: rotate(36deg) scale(0.6);
    }
  }

  & > div:nth-of-type(2) {
    grid-column: 2;
    grid-row: 2;
    background: linear-gradient(90deg, rgb(69, 99, 226), rgb(98, 128, 255));

    &::before {
      top: 64%;
      transform: rotate(-218deg) scale(0.6);
    }
  }

  & > div:nth-of-type(3) {
    grid-column: 1;
    grid-row: 3;
    background: linear-gradient(90deg, rgb(112, 176, 255), rgb(149, 236, 255));

    &::before {
      left: -26px;
      transform: rotate(-90deg) scale(0.6);
    }
  }
`

const Services = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  width: 100%;
`

const Service = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-gap: 20px;
  align-items: center;
  padding: 10px 20px;

  > div:first-of-type {
    position: relative;
    height: 5px;
    width: 40px;
    margin-left: 15px;
    background: rgb(107, 124, 147);
    border-radius: 1px;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -15px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #65ffba;
    }
  }

  > div:last-of-type {
    display: grid;
    grid-gap: 3px;
    > span {
      height: 2px;
      background: #eee;
    }
  }
`
