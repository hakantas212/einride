import React from "react"
import styled from "styled-components"

function TitleBox(props) {
  return (
    <TitleSection>
      <TitleBoxWrapper>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </TitleBoxWrapper>
    </TitleSection>
  )
}

const TitleSection = styled.section`
  display: flex;
  text-align: center;
  align-content: center;
  margin: 4rem 1rem;

  h2 {
    color: #151515;
    font-size: 50px;
    line-height: 64px;
    font-weight: 400;
    letter-spacing: 0;
  }
  p {
    color: #7f7f7f;
    font-size: 22px;
    line-height: 28px;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 38px;
      margin-bottom: 40px;
      max-width: 1200px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      max-width: 888px;
    }
  }
`
const TitleBoxWrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export default TitleBox
