import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Design and code React apps</h1>
      <p>
        Don’t skip design. Learn design and code, by building real apps,
        collaborate and solving product UI problems.
      </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
