import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Grid = ({ gridTitle, gridSubtitle, imageData }) => {
  return (
    <GridContent>
      <h3>{gridTitle}</h3>
      <p>{gridSubtitle}</p>
      <ImgWrapper>
        <Image fluid={imageData} />
      </ImgWrapper>
    </GridContent>
  )
}

const GridContent = styled.div`
  justify-content: space-between;
  padding-top: 1rem;
  flex-wrap: wrap;
  &:nth-child(1n) {
    width: 50%;
  }
  &:nth-child(2n) {
    width: 50%;
    padding-top: 10rem;
  }
  &:nth-child(3n) {
    width: 50%;
    padding-top: 3rem;
    margin-left: 9rem;
  }
  h3 {
    color: #151515;
    margin-bottom: 24px;
    width: 100%;
  }
  p {
    max-width: 350px;
    color: #7f7f7f;
  }

  @media (max-width: 992px) {
    &:nth-child(1n) {
      width: 100%;
      margin: 0;
    }
    &:nth-child(2n) {
      width: 100%;
    }
    &:nth-child(3n) {
      width: 100%;
    }
  }
`
const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
`
const Image = styled(Img)`
  max-width: 400px;
  max-height: 483px;
`

export default Grid
