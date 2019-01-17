import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

import { Laptop } from './shared'

const apps = [
  {
    name: 'Hospice RN Nurse (Travel)',
    location: 'San Francisco, CA',
    type: 'On-Call',
  },
  {
    name: 'Pharmacy Consultant',
    location: 'Los Angeles, CA',
    type: 'On-Site',
  },
  {
    name: 'Assistant Director of Nursing',
    location: 'Woodland Hills, CA',
    type: 'On-Site',
  },
  {
    name: 'Interim DOM/RN QA Nurse',
    location: 'Austin, TX',
    type: 'On-Site',
  },
  {
    name: 'Nurse Consultant',
    location: 'Las Vegas, NV',
    type: 'On-Site',
  },
]

const JobsApp = React.memo(function() {
  return (
    <Laptop text="https://avresources.co/jobs" noheader>
      <Layout>
        <SideMenu>
          <h5>My Apps</h5>
          {Array.from(Array(4)).map((i, index) => (
            <MyApp key={index}>
              <span />
              <span />
              <span />
              <span />
              <p>Accepted</p>
            </MyApp>
          ))}
        </SideMenu>
        <Body>
          <h5>Openings</h5>
          {apps.map(app => (
            <App key={app.name}>
              <h5>{app.name}</h5>
              <span>{app.location}</span>
              <span>{app.type}</span>
              <AppBody>
                <span />
                <span />
                <span />
                <span />
              </AppBody>
            </App>
          ))}
        </Body>
      </Layout>
    </Laptop>
  )
})

JobsApp.displayName = 'JobsApp'
export default JobsApp

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  background: #fff;
  max-height: 350px;
  max-width: 600px;
  margin: auto;
`
const zoomInAndOut = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  } 
  10% {
    transform: scale(1);
    opacity: 1;
  }
  80% {
    transform: scale(1);
    opacity: 1;
  }
  }
  95% {
    transform: scale(0);
    opacity: 0;
  }
`

const SideMenu = styled.div`
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: max-content;

  > h5 {
    margin: 0;
    font-size: 10px;
    font-weight: var(--fontbold);
  }

  > div:nth-of-type(2) p {
    animation-delay: 0.25s;
  }
  > div:nth-of-type(3) p {
    animation-delay: 0.5s;
  }
  > div:nth-of-type(4) p {
    animation-delay: 0.75s;
  }
  > div p {
    animation: ${zoomInAndOut} 5s infinite;
  }
`

const MyApp = styled.div`
  position: relative;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 3px;
  background: #fff;
  > span {
    display: block;
    margin: 5px 0;
    height: 3px;
    background: #eee;
  }

  > span:first-of-type {
    width: 50%;
    background: rgba(34, 34, 49, 0.4);
  }
  > span:last-of-type {
    width: 60%;
  }

  > p {
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 2px;
    background: rgb(14, 197, 199);
    color: #fff;
    font-size: 5px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
    text-transform: uppercase;
    border-radius: 3px;
    transform-properties: opacity, transform;
    opacity: 0;
    transform: scale(0);
  }
`

const Body = styled.div`
  padding: 20px;
  grid-gap: 10px;

  > h5 {
    margin: 0;
    font-size: 18px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
  }
`

const App = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: rgba(188, 193, 217, 0.12) 0px 1px 3px,
    rgba(164, 169, 175, 0.16) 0px 5px 12px;
  > h5 {
    margin: 0 0 -5px 0;
    font-size: 8px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
    line-height: 1px;
  }
  > span {
    font-size: 8px;
    color: rgb(66, 71, 112);
    &:not(:nth-of-type(3))::after {
      content: '·';
      margin: 0 5px;
    }
  }
`

const AppBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  grid-column-gap: 20px;
  grid-row-gap: 5px;

  > span {
    height: 3px;
    background: #eee;
    border-radius: 1px;
  }

  > span:first-of-type {
    grid-row: 1;
  }

  > span:nth-of-type(2) {
    grid-row: 2;
  }

  > span:nth-of-type(3) {
    grid-row: 3;
    width: 80%;
  }

  > span:nth-of-type(4) {
    border-radius: 2px;
    height: 8px;
    grid-row: 2 / span 2;
    background: rgb(0, 122, 255);
  }
`
