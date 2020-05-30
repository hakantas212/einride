import React from "react"
import Cta from "./cta"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const CtaSection = () => {
  const data = useStaticQuery(graphql`
    query {
      shippers: file(relativePath: { eq: "shipper-hs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      operators: file(relativePath: { eq: "pod-aerial.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, maxHeight: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SectionWrapper>
      <Cta
        title="Shippers"
        description="Stand up and stand out! Ship your goods with an eco-friendly and cost-competitive solution."
        fluid={data.shippers.childImageSharp.fluid}
        url=""
        linkText="Shippers: Contact us"
      />
      <Cta
        title="Operators"
        description="Don’t wait for disruption! Change the game with your own Autonomous Electric Transport system."
        fluid={data.operators.childImageSharp.fluid}
        url=""
        linkText="Operators: Contact us"
      />
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  max-width: 1150px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
`

export default CtaSection
