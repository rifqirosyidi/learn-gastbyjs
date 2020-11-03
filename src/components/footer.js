import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            Created by <strong>@{ data.site.siteMetadata.author }</strong> 2020
        </footer>
    )
}

export default Footer
