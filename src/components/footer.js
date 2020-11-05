import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

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
        <footer className={footerStyles.footer}>
            Created by <strong>@{ data.site.siteMetadata.author }</strong> 2020
        </footer>
    )
}

export default Footer
