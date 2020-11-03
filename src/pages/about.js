import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

function About() {
    return (
        <div>
            <Layout>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, corrupti cumque. In odit consequuntur harum </p>
                <p>Contact <Link to="/contact" >contact me</Link></p>
            </Layout>
        </div>
    )
}

export default About
