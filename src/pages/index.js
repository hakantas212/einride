import React from "react"
import Layout from "../components/layout"
import Hero from "../components/main/hero"
import TitleBox from "../components/main/title-box"
import GridSection from "../components/main/grid-section"
import CtaSection from "../components/main/cta-section"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <TitleBox
        title="Be part of the change"
        subtitle="Forget the status quo, sustainable transport is now achievable and cost-competitive. Einride gives you the logistics of tomorrow, today. Don’t wait for your business to be disrupted by change – pioneer the change."
      />

      <GridSection></GridSection>
      <TitleBox
        title="The Einride Service"
        subtitle="Plan, order and track your sustainable transport. You can drive the transition to sustainable transport and gain a competitive edge with our high-performance transport service."
      />
      <CtaSection />
    </Layout>
  )
}

export default IndexPage
