import React from 'react'
import styled from '@emotion/styled'

export default ({ illustrations }) => (
  <Container>
    <div className="animate-illustration">
      {illustrations.map((Illustration, index) => (
        <div key={index} className="illustration">
          <Illustration />
        </div>
      ))}
    </div>
  </Container>
)

// Styles
const Container = styled.div`
  .animate-illustration {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    justify-content: center;
  }

  .animate-illustration .illustration {
    opacity: 0;
    transform: translateY(10px);
    transition-property: transform, opacity;
    transition: 0.6s var(--ease);
  }

  .animated {
    .illustration {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0.2s;
    }

    .illustration:nth-of-type(2) {
      transition-delay: 0.4s;
    }
    .illustration:nth-of-type(3) {
      transition-delay: 0.6s;
    }
  }
`
