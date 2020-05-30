import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Cta = ({ title, description, fluid, url, linkText }) => {
  return (
    <Container>
      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContainer>

      <ImageContainer>
        <Img fluid={fluid}></Img>
        <a href={url}>{linkText}</a>
      </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 2rem;
  padding: 0 0.6rem;
`
const ImageContainer = styled.div`
  position: relative;
  width: 550px;
  height: 650px;
  a {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px;
    line-height: 48px;
    max-height: 48px;
    min-width: 220px;
    padding: 0 24px;
    background: #fff;
    text-decoration: none;
    color: #000;
  }
`
const TextContainer = styled.div`
  display: flex;
  width: 500px;

  p {
    text-align: left;
    margin-left: 4rem;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 24px;
    color: #7f7f7f;
  }
`

export default Cta
