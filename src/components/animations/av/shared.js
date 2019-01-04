import React from 'react'
import styled from '@emotion/styled'

export const Laptop = ({ dark, children, text, noheader, small }) => (
  <LaptopScreen aria-hidden="true">
    <BrowserNavigation text={text || 'https://avresources.co'} />
    {noheader ? null : (
      <SiteHeader>
        <Logo>AVRC</Logo>
        <span />
        <span />
        <span />
        <span />
      </SiteHeader>
    )}
    {children}
  </LaptopScreen>
)

export const LaptopPlain = ({ children }) => (
  <LaptopPlainScreen aria-hidden="true">
    <LaptopPlainHeader>
      <div />
    </LaptopPlainHeader>
    {children}
  </LaptopPlainScreen>
)

export const IconFacebook = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16px"
        height="16px"
        viewBox="0 0 58 58"
        version="1.1"
      >
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="flogo-RGB-HEX-Blk-58" fill-rule="nonzero">
            <path
              d="M54.8,0 L3.2,0 C1.4326888,-1.082166e-16 2.164332e-16,1.4326888 0,3.2 L0,54.8 C2.164332e-16,56.5673112 1.4326888,58 3.2,58 L31,58 L31,35.57 L23.45,35.57 L23.45,26.79 L31,26.79 L31,20.33 C31,12.84 35.58,8.76 42.26,8.76 C44.5110737,8.75509083 46.7608479,8.86858092 49,9.1 L49,16.93 L44.4,16.93 C40.76,16.93 40.05,18.65 40.05,21.19 L40.05,26.78 L48.75,26.78 L47.62,35.56 L40,35.56 L40,58 L54.8,58 C56.5673112,58 58,56.5673112 58,54.8 L58,3.2 C58,1.4326888 56.5673112,1.082166e-16 54.8,0 Z"
              id="Shape"
              fill="#000000"
            >
              <path
                d="M40,58 L40,35.57 L47.57,35.57 L48.7,26.79 L40,26.79 L40,21.2 C40,18.66 40.71,16.94 44.35,16.94 L49,16.94 L49,9.1 C46.7575303,8.86823046 44.504409,8.75473991 42.25,8.76 C35.56,8.76 31,12.84 31,20.33 L31,26.79 L23.45,26.79 L23.45,35.57 L31,35.57 L31,58 L40,58 Z"
                id="f"
                fill="#FFFFFF/"
              />
            </path>
          </g>
        </g>
      </svg>`,
    }}
  />
)

export const IconTwitter = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="19px"
        height="16px"
        viewBox="0 0 70 58"
        version="1.1"
      >
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="Twitter_Logo_Blue" fill="#000000" fill-rule="nonzero">
            <path
              d="M22.0136,58 C48.4288,58 62.8768,35.6839278 62.8768,16.3315305 C62.8768,15.6976809 62.8768,15.0666865 62.8348,14.4385474 C65.6455278,12.3654335 68.0717953,9.79853855 70,6.85804943 C67.3788614,8.04238238 64.598322,8.81906757 61.7512,9.16217818 C64.7492832,7.33195777 66.9931458,4.45333843 68.0652,1.06203784 C65.246041,2.76787919 62.1618091,3.97007108 58.9456,4.61673461 C54.4938318,-0.210245866 47.4200142,-1.39166631 41.690738,1.73494602 C35.9614617,4.86155834 33.00157,11.5186301 34.4708,17.9732579 C22.9233081,17.3829485 12.1645322,11.821272 4.872,2.6723583 C1.06014372,9.36388146 3.00716607,17.9243186 9.3184,22.2217629 C7.03287536,22.1526892 4.79718224,21.523995 2.8,20.3887386 C2.8,20.4486973 2.8,20.5115112 2.8,20.5743251 C2.80187077,27.545508 7.62090417,33.5497825 14.322,34.9301608 C12.2076349,35.5181563 9.98922564,35.6041093 7.8372,35.1814164 C9.7186542,41.1470908 15.1104088,45.2338815 21.2548,45.3515609 C16.1692581,49.4271334 9.88696663,51.6395989 3.4188,51.6329528 C2.27612999,51.6307159 1.13457138,51.5601671 0,51.4216696 C6.56778066,55.7195023 14.2097575,57.9991918 22.0136,57.9885793"
              id="Shape"
            />
          </g>
        </g>
      </svg>`,
    }}
  />
)

export const IconLinkedIn = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16px"
        height="16px"
        viewBox="0 0 56 58"
        version="1.1"
      >
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="iconmonstr-linkedin-3" fill="#000000" fill-rule="nonzero">
            <path
              d="M13.6216216,58 L1.51351351,58 L1.51351351,16.7894737 L13.6216216,16.7894737 L13.6216216,58 Z M6.81081081,13.7368421 C3.05124324,13.7368421 0,10.6608485 0,6.86842105 C0,3.07599356 3.05124324,0 6.81081081,0 C10.5703784,0 13.6216216,3.07599356 13.6216216,6.86842105 C13.6216216,10.6608485 10.5742703,13.7368421 6.81081081,13.7368421 Z M56,58 L45.1027027,58 L45.1027027,37.0056846 C45.1027027,24.388116 30.572973,25.3434248 30.572973,37.0056846 L30.572973,58 L19.6756757,58 L19.6756757,16.7906014 L30.572973,16.7906014 L30.572973,23.4028368 C35.6438486,13.7148818 56,12.9993368 56,32.6786977 L56,58 Z"
              id="Shape"
            />
          </g>
        </g>
      </svg>`,
    }}
  />
)

export const IconExit = styled.div`
  position: relative;
  color: rgb(0, 0, 0);
  width: 15px;
  height: 15px;
  margin: auto;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 7px;
    width: 15px;
    height: 1px;
    background-color: currentcolor;
  }

  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`

export const IconBack = styled.div`
  position: relative;
  color: rgb(0, 0, 0);
  width: 16px;
  height: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: 5px;
    width: 8px;
    margin-left: 3px;
    height: 1px;
    background-color: currentcolor;
    transform: rotate(-45deg);
  }
  &::after {
    top: 10px;
    width: 8px;
    margin-left: 3px;
    height: 1px;
    background-color: currentcolor;
    transform: rotate(45deg);
  }
`

const LaptopPlainScreen = styled.div`
  background: #fff;
  box-shadow: var(--lightboxshadow);
  border-radius: var(--baseborderradius);
`

const LaptopPlainHeader = styled.div`
  padding: 8px;
  background: var(--light);
  border-top-left-radius: var(--baseborderradius);
  border-top-right-radius: var(--baseborderradius);
  > div {
    max-width: 60%;
    margin: auto;
    height: 10px;
    background: #fff;
    border-radius: 1px;
  }
`

const BrowserNavigation = ({ text }) => (
  <LaptopBrowserNavigationContainer>
    <LaptopBrowserActionTogglers>
      <span />
      <span />
      <span />
    </LaptopBrowserActionTogglers>
    <LaptopBrowserSearchBar>
      <Padlock>
        <IconLock />
      </Padlock>
      <a href={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </LaptopBrowserSearchBar>
  </LaptopBrowserNavigationContainer>
)

const LaptopScreen = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
  border-bottom: none;
  border-radius: var(--illustrationborderradius);
  box-shadow: var(--illustrationboxshadow);
  overflow: hidden;
`

const SiteHeader = styled.div`
  position: absolute;
  padding: 15px 20px;
  display: grid;
  grid-template-columns: auto repeat(3, minmax(40px, max-content)) auto;
  grid-gap: 8px;
  align-items: center;
  width: 100%;
  z-index: 1;
`

const Logo = styled.span`
  font-weight: 800;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  color: ${props => (props.theme.color ? props.theme.color : '#fff')};
`

const IconLock = styled.div`
  color: #01b98d;
  position: absolute;
  margin-left: ${props => (props.theme.small ? '5px' : '7px')};
  margin-top: ${props => (props.theme.small ? '3.8px' : '6px')};
  width: 6px;
  height: 4px;
  border-radius: 1px;
  border: solid 1px currentColor;
  background-color: currentColor;
  transform: ${props => (props.theme.small ? 'scale(.8)' : '')};
  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: -4px;
    width: 2px;
    height: 3px;
    border-radius: var(--illustrationborderradius)
      var(--illustrationborderradius) 0 0;
    border-top: solid 1px currentColor;
    border-left: solid 1px currentColor;
    border-right: solid 1px currentColor;
  }
`

const LaptopBrowserActionTogglers = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 3px;
  > span {
    height: ${props => (props.theme.small ? '5px' : '8px')};
    width: ${props => (props.theme.small ? '5px' : '8px')};
    border-radius: 50%;
    background: #eee;
  }
  > span:first-of-type {
    background: #ff6159;
  }
  > span:nth-of-type(2) {
    background: #ffc12f;
  }
  > span:last-of-type {
    background: #29ce42;
  }
`

const LaptopBrowserSearchBar = styled.div`
  position: relative;
  height: ${props => (props.theme.small ? '8px' : '12px')};
  background: #fff;
  border-radius: 2px;
  font-size: ${props => (props.theme.small ? '5px' : '8px')};
  display: grid;
  align-items: center;
  padding-left: ${props => (props.theme.small ? '20px' : '25px')};
  box-sizing: border-box;
  overflow: hidden;
  a {
    color: rgb(107, 124, 147);
    cursor: ne-resize;
    outline: none;
    &:hover,
    &:active,
    &:focus {
      opacity: 0.5;
    }
  }
`

const Padlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: inherit;
  width: ${props => (props.theme.small ? '15px' : '20px')};
  background: #f7fffd;
`

const LaptopBrowserNavigationContainer = styled.div`
  position: relative;
  height: ${props => (props.theme.small ? '15px' : '30px')};
  width: 100%;
  padding: 0 10px;
  background: var(--illustrationlightbackground);
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 10px;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
`
