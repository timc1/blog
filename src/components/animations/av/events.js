import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { Laptop, IconFacebook, IconTwitter, IconLinkedIn } from './shared'

import dummyImage1 from '../../../images/dummy_image_1.jpg'
import dummyImage2 from '../../../images/dummy_image_2.jpg'
import dummyImage3 from '../../../images/dummy_image_3.jpg'

const events = [
  {
    name: 'DON Academy',
    month: 'Jul',
    day: '18',
    url: dummyImage1,
  },
  {
    name: 'Pharmacy Nurse Webinar',
    month: 'Aug',
    day: '20',
    url: dummyImage2,
  },
  {
    name: 'RNs & LVNs Meetup 2018',
    month: 'Sep',
    day: '08',
    url: dummyImage3,
  },
]

const singlePageTheme = {
  isSinglePage: true,
}

export default React.memo(() => (
  <Laptop text="https://avresources.co/events" noheader>
    <Layout className="all-events-page">
      <Banner>
        <h5>Events</h5>
        <Form>
          <span />
          <span />
          <span />
          <span />
        </Form>
      </Banner>
      <Body>
        <Header>Upcoming 2018</Header>
        {events.map(event => (
          <Event key={event.name} event={event} />
        ))}
      </Body>
    </Layout>
    <ThemeProvider theme={singlePageTheme}>
      <SingleEventPage theme={singlePageTheme}>
        <Navbar>
          <BackButton>Back</BackButton>
          <SocialMediaIcons>
            <IconFacebook />
            <IconTwitter />
            <IconLinkedIn />
            <Button />
          </SocialMediaIcons>
        </Navbar>
        <Event event={events[0]} singlePage />
      </SingleEventPage>
    </ThemeProvider>
  </Laptop>
))

const Event = ({ event: { name, month, day, url }, singlePage }) => (
  <EventContainer>
    <EventContent>
      <Date>
        <span className="month">{month}</span>
        <span className="day">{day}</span>
      </Date>
      <Text>
        <Location>
          {Array.from(Array(5)).map((i, index) => (
            <span key={index} />
          ))}
        </Location>
        <Title>{name}</Title>
        <TextContent>
          {Array.from(Array(singlePage ? 15 : 5)).map((i, index) => (
            <span key={index} />
          ))}
        </TextContent>
      </Text>
    </EventContent>
    <EventImage url={url} />
  </EventContainer>
)

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

// Styles
const Layout = styled.div`
  position: relative;
  max-height: 350px;
  max-width: 600px;
  margin: auto;
  will-change: filter;

  animation: ${blur} 10s var(--cubic) infinite;
`

const Banner = styled.div`
  padding: 20px 10px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 5px;
  border-bottom: 1px solid #eee;
  max-width: 400px;
  margin: auto;

  > h5 {
    margin: 0;
    font-size: 18px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
  }
`

const Form = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(auto, 60px);
  grid-gap: 5px;
  align-items: center;
  > span {
    height: 15px;
    max-width: 80px;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 1px;
  }

  > span:first-of-type {
    grid-row: 1;
    height: 5px;
    border: none;
    background: rgba(34, 34, 49, 0.4);
  }

  > span:nth-of-type(n + 2) {
    grid-row: 2;
  }

  > span:last-of-type {
    background: rgb(0, 122, 255);
    border-radius: 2px;
    border: none;
  }
`

const Body = styled.div`
  padding: 10px;
  margin-top: 10px;
  max-width: 400px;
  margin: auto;
`

const Header = styled.h5`
  font-size: 8px;
  font-weight: var(--fontbold);
  font-family: var(--illustrationavfont);
  color: rgb(66, 71, 112);
`

const EventContainer = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.theme.isSinglePage ? '1fr' : '1fr 0.5fr'};
  grid-gap: 10px;
  margin: 10px 0;
`

const EventContent = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
`

const EventImage = styled.div`
  padding-top: ${props => (props.theme.isSinglePage ? '33%' : '66%')};
  background: ${props => (props.url ? `url(${props.url})` : '#eee')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 3px;
  grid-row: ${props => (props.theme.isSinglePage ? '1' : '')};
`

const Date = styled.div`
  font-size: 8px;
  text-align: center;
  span {
    display: block;
  }
  .month {
    text-transform: uppercase;
    color: rgb(232, 54, 48);
  }
  .day {
    font-size: 18px;
    font-weight: var(--fontbold);
  }
`

const Text = styled.div``

const Location = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
`

const Title = styled.h5`
  font-size: ${props => (props.theme.isSinglePage ? '18px' : '10px')};
  font-weight: var(--fontbold);
  font-family: var(--illustrationavfont);
  margin: 10px 0;
`

const TextContent = styled.div`
  display: grid;
  grid-gap: ${props => (props.theme.isSinglePage ? '8px' : '5px')};
  > span {
    display: block;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 0px;
    height: 3px;
    background: rgb(238, 238, 238);
    border-radius: 1px;
    width: ${props => (props.theme.isSinglePage ? '90%' : '')};
  }
  > span:last-of-type {
    width: 66%;
  }
`

const flowInOut = keyframes`
  35% {
   opacity: 0;
   transform: scale(0.96);
  }
  45% {
    opacity: 1;
    transform: scale(1)
  }
  85% {
    opacity: 1;
    transform: scale(1)
  }
  95% {
    opacity: 0;
    transform: scale(0.96)
  }
`

const SingleEventPage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 40px 10%;
  opacity: 0;
  transform: scale(0.96);
  animation: ${flowInOut} 10s var(--illustrationease) infinite;
`

const Navbar = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  grid-gap: 5px;
`

const BackButton = styled.span`
  font-size: 8px;
  &::before {
    content: '〈';
    margin-right: 8px;
  }
`

const SocialMediaIcons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 15px;
  align-items: center;
  transform: scale(0.5) translateX(50%);
`

const Button = styled.div`
  height: 100%;
  width: 80px;
  background: rgb(0, 122, 255);
  border-radius: 1px;
`
