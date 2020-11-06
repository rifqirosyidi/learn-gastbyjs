import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

function NotFound() {
    return (
        <Layout>
            <Head title="NotFound" />
            <h1>Page not Found</h1>
            <p><Link to="/">back to home</Link></p>
        </Layout>
    )
}

export default NotFound
