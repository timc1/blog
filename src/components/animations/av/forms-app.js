import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

import { LaptopPlain, IconExit, IconBack } from './shared'
import pocPdf from '../../../images/poc_pdf.jpg'
import singleCaret from '../../../images/singlecaret.svg'
import gear from '../../../images/gear.svg'
import check from '../../../images/check.svg'

const tags = [
  { name: 'F675: Quality of Life', short: 'F675' },
  { name: 'F551: Rights Exercised by Representative', short: 'F551' },
  { name: 'F645: PASARR Screening for MD & ID', short: 'F645' },
]

const questions = [
  {
    text:
      'How the corrective actions will be accomplished for those affected by the deficient practice:',
  },
  {
    text:
      'How the facility will identify other residents having the potential to be affected by the same deficient practice and what action will be taken:',
  },
  {
    text:
      'What measures will be put in place or what system changes will be taken to ensure that the deficient practice will not recur:',
  },
  {
    text:
      'How the facility plans to monitor its performance to make sure that solutions are sustained. The facility must develop a plan for ensuring that correction is achieved and sustained. This plan must be implemented and corrective action must be evaluated for effectiveness. The plan of correction is integrated into the quality assurance system:',
  },
]

export default () => {
  const animation = useRef()
  const animationContainer = useRef()
  const animationStep = useRef(0)

  useEffect(() => {
    animation.current = setInterval(() => {
      triggerAnimation()
    }, 4000)
    triggerAnimation()

    return () => clearInterval(animation.current)
  }, [])

  const triggerAnimation = () => {
    animationStep.current = (animationStep.current + 1) % 3
    animationContainer.current.className = `animate-${animationStep.current}`
  }

  return (
    <Container>
      <LaptopPlain>
        <Layout>
          <div ref={animationContainer}>
            <Nav>
              <ExitContainer>
                <IconExit />
              </ExitContainer>
              <StepsContainer>
                <div className="previous">Previous</div>
                <div className="next">Next</div>
              </StepsContainer>
            </Nav>
            <Steps className="steps">
              <div className="step step1">Setup</div>
              <div className="step step2">Review</div>
              <div className="step step3">Download</div>
            </Steps>
            <Body>
              <MyTags>
                {tags.map(tag => (
                  <SingleTag key={tag.name} {...tag} />
                ))}
              </MyTags>
              <TagsBody>
                <SearchBar>
                  <span>F645: PASARR Screening for MD &amp; ID</span>
                </SearchBar>
                <Overview>
                  <div className="title">Overview</div>
                  {Array.from(Array(15)).map((i, index) => (
                    <span key={index} />
                  ))}
                </Overview>
                <Scenarios>
                  <ScenariosHeader>
                    <IconBack />
                  </ScenariosHeader>
                  {questions.map(question => (
                    <SingleQuestion key={question.text} {...question} />
                  ))}
                </Scenarios>
              </TagsBody>
              <div className="pdf-viewer" />
              <div className="payments">
                <PaymentContainer>
                  <PaymentText>
                    <div className="title">Checkout</div>
                    <div className="description">
                      <span />
                      <span />
                    </div>
                    {tags.map(ftag => (
                      <PaymentFtag key={ftag.short} {...ftag} />
                    ))}
                  </PaymentText>
                  <PaymentButton>
                    <span />
                  </PaymentButton>
                </PaymentContainer>
              </div>
            </Body>
          </div>
        </Layout>
      </LaptopPlain>
    </Container>
  )
}

const SingleTag = ({ name }) => (
  <Tag>
    <TagTitle>{name}</TagTitle>
    <TagCustomize>
      <span />
    </TagCustomize>
    <TagDelete>
      <span />
    </TagDelete>
  </Tag>
)

const SingleQuestion = ({ text }) => (
  <QuestionContainer>
    <div className="question">{text}</div>
    <div className="answer">
      <span />
      <span />
      <span />
      <span />
    </div>
    <div className="dropdown" />
    <div className="dropdown" />
  </QuestionContainer>
)

const PaymentFtag = ({ short }) => (
  <FtagContainer>
    <div className="ftag">{short}</div>
    <div className="price">$5</div>
  </FtagContainer>
)

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`

const Layout = styled.div`
  max-height: 400px;
  overflow: hidden;

  .animate-0 {
    .step1 {
      opacity: 1;
    }
    .steps::after {
      transform: scaleX(0.33);
    }
    .pdf-viewer {
      transform: translateX(20px);
    }
    .payments {
      transform: translateX(-20px);
    }
  }

  .animate-1 {
    .previous,
    .next {
      opacity: 1;
      transform: translateX(calc(-50% - 20px));
    }
    .step2 {
      opacity: 1;
    }
    .steps::after {
      transform: scaleX(0.66);
    }
    .pdf-viewer {
      opacity: 1;
      transform: translateX(0);
    }
    .payments {
      transform: translateX(20px);
    }
  }

  .animate-2 {
    .previous,
    .next {
      opacity: 1;
      transform: translateX(-50%);
    }
    .next {
      opacity: 0;
    }
    .step3 {
      opacity: 1;
    }
    .steps::after {
      transform: scaleX(1);
    }
    .pdf-viewer {
      transform: translateX(-20px);
    }
    .payments {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

const Nav = styled.div`
  position: relative;
  height: 30px;
  border-bottom: 1px solid var(--illustrationlightbackground);
  display: flex;
  align-items: center;
`

const ExitContainer = styled.div`
  height: 100%;
  width: 30px;
  border-right: 1px solid var(--illustrationlightbackground);
  display: flex;
`

const StepsContainer = styled.div`
  position: absolute;
  left: 50%;
  font-size: 10px;
  font-weight: var(--fontbold);
  font-family: var(--illustrationavfont);
  height: inherit;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
  transition: transform 0.25s ease-in;

  .previous,
  .next {
    transition: 0.6s ease-in;
    transform: translateX(calc(-50% - 60px));
    transition-properties: opacity, transform;
  }

  .previous {
    opacity: 0;
    color: rgb(107, 124, 147);
  }
  .next {
    color: rgb(103, 114, 229);
  }
`

const Steps = styled.div`
  position: relative;
  height: 20px;
  border-bottom: 1px solid rgb(231, 236, 243);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  place-content: center;
  grid-gap: 10px;

  .step {
    position: relative;
    font-size: 6px;
    font-weight: var(--fonbold);
    text-transform: uppercase;
    color: var(--black);
    transition: opacity 0.25s var(--illustrationease);
    opacity: 0.3;
  }

  .step:not(:last-child)::after {
    content: '';
    position: absolute;
    height: 9px;
    width: 9px;
    top: -1px;
    -webkit-mask-image: url(${singleCaret});
    background: rgb(231, 236, 243);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center center;
    transform: scale(0.5);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    transform-origin: 0px center 0px;
    transform: scaleX(0);
    background: rgb(103, 114, 229);
    transition: transform 0.6s ease 0.2s;
  }
`

const Body = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.3fr 1fr;

  > .pdf-viewer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${pocPdf});
    background-size: cover;
    background-repeat: no-repeat;
    transform: translateX(20px);
    transition: 0.8s var(--illustrationease);
    transition-properties: opacity, transform;
    opacity: 0;
  }

  > .payments {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    padding: 40px 10px;
    transform: translateX(20px) scale(0.95);
    transition: 0.8s var(--illustrationease);
    transition-properties: opacity, transform;
    opacity: 0;
  }
`

const MyTags = styled.div`
  border-right: 1px solid var(--illustrationlightbackground);
  padding: 10px;
`

const Tag = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  background: rgba(14, 197, 199, 0.04);
  border: 1px solid rgba(14, 197, 199, 0.4);
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`

const TagsBody = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  grid-gap: 5px;
`

const TagTitle = styled.p`
  font-size: 6px;
  font-weight: var(--fontbold);
  color: rgb(66, 71, 112);
  font-family: var(--illustrationavfont);
  margin-bottom: 10px;
  grid-column: span 2;
`

const Button = styled.div`
  position: relative;
  font-size: 6px;
  box-shadow: rgba(188, 193, 217, 0.12) 0px 1px 3px,
    rgba(164, 169, 175, 0.16) 0px 5px 12px;
  background: #fff;
  display: flex;
  height: 15px;
  padding: 0 5px 0 18px;
  align-items: center;

  > span {
    display: block;
    height: 3px;
    width: 100%;
    background: rgba(107, 124, 147, 0.3);
    border-radius: 1px;
  }
`

const TagCustomize = styled(Button)`
  border-radius: 1px;
  &::before {
    content: '';
    position: absolute;
    height: 9px;
    width: 9px;
    left: 4px;
    top: 3px;
    -webkit-mask-image: url(${gear});
    -webkit-mask-size: contain;
    background: rgb(107, 124, 147);
    -webkit-mask-repeat: no-repeat;
  }
`

const TagDelete = styled(Button)`
  padding: 0 5px;
`

const SearchBar = styled.div`
  grid-column: span 2;
  height: 20px;
  border: 1px solid #eee;
  border-radius: 1px;
  display: flex;
  align-items: center;
  padding: 0 10px;

  > span {
    font-size: 8px;
    font-family: var(--illustrationavfont);
  }
`

const Overview = styled.div`
  padding: 10px;
  border-radius: 1px;
  background: rgba(255, 162, 123, 0.08);
  height: max-content;

  > .title {
    position: relative;
    padding-left: 13px;
    font-size: 8px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
    &::before {
      content: '';
      top: 0;
      height: 8px;
      width: 8px;
      position: absolute;
      left: 0px;
      background: rgb(14, 197, 199);
      -webkit-mask: url(${check}) center bottom / contain no-repeat;
    }
  }

  > span {
    display: block;
    height: 3px;
    border-radius: 2px;
    background: #eee;
    margin: 5px 0;
  }
`

const Scenarios = styled.div`
  padding: 10px;
  border-radius: 1px;
  box-shadow: var(--illustrationboxshadow);
`

const ScenariosHeader = styled.div``

const QuestionContainer = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;

  .question {
    grid-column: span 2;
    font-size: 6px;
    font-family: var(--illustrationavfont);
    color: rgb(66, 71, 112);
  }

  .answer {
    border-radius: 1px;
    background: rgb(246, 249, 252);
    display: grid;
    grid-gap: 5px;
    grid-column: span 2;
    padding: 10px;
    > span {
      background: rgba(107, 124, 147, 0.3);
    }
  }

  .dropdown {
    height: 15px;
    border-radius: 1px;
    border: 1px solid #eee;
  }
`

const PaymentContainer = styled.div`
  padding: 20px;
  border: 1px solid var(--illustrationlightbackground);
  border-radius: var(--illustrationborderradius);
  box-shadow: var(--illustrationboxshadow);
  max-width: 300px;
  margin: auto;
`

const PaymentText = styled.div`
  .title {
    font-size: 12px;
    font-weight: var(--fontbold);
    font-family: var(--illustrationavfont);
  }
  .description {
    > span {
      margin: 5px 0;
      background: rgba(107, 124, 147, 0.3);
    }
  }
`

const FtagContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  margin: 10px 0;

  .ftag,
  .price {
    background: #fff;
    padding: 0 5px;
    font-size: 14px;
    z-index: 1;
  }
  .ftag {
    padding-left: 20px;
    color: rgb(107, 124, 147);

    font-weight: var(--fontbold);

    &::before {
      content: '';
      height: 15px;
      width: 15px;
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(14, 197, 199);
      -webkit-mask: url(${check}) center bottom / contain no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 60px;
      width: calc(100% - 60px);
      z-index: -1;
      border-top: 2px dotted rgb(231, 236, 243);
    }
  }

  .price {
    color: rgb(34, 34, 49);
  }
`

const PaymentButton = styled.div`
  padding: 6px;
  margin-left: auto;
  width: 20%;
  background: rgb(103, 114, 229);
  border-radius: 2px;
  box-shadow: var(--illustrationboxshadow);

  > span {
    display: block;
    width: 60%;
    margin: auto;
    height: 2px;
    background: #fff;
    border-radius: 1px;
  }
`
