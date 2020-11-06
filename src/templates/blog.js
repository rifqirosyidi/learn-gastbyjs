import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost (slug: { eq: $slug }) {
            title
            published(formatString: "MMMM Do, YYYY")
            content {
                json
            }
        }
    }
`

function Blog(props) {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img src={url} alt={alt} />
            }
        }
    }
    console.log(props)
    return (
        <Layout>
            <h1>{ props.data.contentfulBlogPost.title }</h1>
            <p>{ props.data.contentfulBlogPost.published }</p>
            { documentToReactComponents(props.data.contentfulBlogPost.content.json, options) }
        </Layout>
    )
}

export default Blog
