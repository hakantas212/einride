import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "woods-pod.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 3000, maxHeight: 1688) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <HeroSection>
      <HeroImage fluid={data.file.childImageSharp.fluid} alt="background">
        <TextWrapper>
          <h1>Intelligent movement</h1>
          <p>
            The new, sustainable way to move goods – changing transport at its
            core.
          </p>
        </TextWrapper>
      </HeroImage>
    </HeroSection>
  )
}

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  margin-top: -80px;

  p {
    font-size: 24px;
    line-height: 28px;
  }

  h1 {
    font-size: 98px;
    line-height: 96px;
    font-weight: 400;
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 60px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 64px;
    }
  }
`

const HeroImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  transition: opacity 0.5s ease 500ms;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
`
const TextWrapper = styled.div`
  position: absolute;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  margin: 0;
`

export default Hero
