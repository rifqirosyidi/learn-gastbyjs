import { Link } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Rifqi</h2>
      <p>Need me? <Link to="/contact">contact me</Link></p>
      <p>About? <Link to="/about">about me</Link></p>
    </Layout>
  )
}
