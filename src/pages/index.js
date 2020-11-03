import { Link } from "gatsby"
import React from "react"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Rifqi</h2>
      <p>Need me? <Link to="/contact">contact me</Link></p>
      <p>About? <Link to="/about">about me</Link></p>
    </Layout>
  )
}
