import React from "react"
import Grid from "./grid"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const GridSection = () => {
  const data = useStaticQuery(graphql`
    query {
      zzz: file(relativePath: { eq: "pod.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondImage: file(relativePath: { eq: "workshop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thirdImage: file(relativePath: { eq: "wind.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GridWrapper>
      <Grid
        gridTitle="Sustainable transport"
        gridSubtitle="Make the transport of goods more sustainable for your business – and the environment."
        imageData={data.zzz.childImageSharp.fluid}
      />
      <Grid
        gridTitle="Sustainable business"
        gridSubtitle="Lower your operational cost and maximize efficiency with predictable, intelligent transport."
        imageData={data.secondImage.childImageSharp.fluid}
      />
      <Grid
        gridTitle="Sustainable intelligence"
        gridSubtitle="Realize higher filling rates while supporting the transition to eco-friendly transport."
        imageData={data.thirdImage.childImageSharp.fluid}
      />
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  max-width: 1150px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`

export default GridSection
