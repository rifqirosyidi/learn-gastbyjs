import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

// import './header.module.scss'

// Css Module
import headerStyle from './header.module.scss'

function Header() {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={ headerStyle.header }>
            <h1>
                <Link className={ headerStyle.title } to="/">
                    { data.site.siteMetadata.title }
                </Link>
            </h1>
            <nav>
                <ul className={ headerStyle.navList }>
                    <li>
                        <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={ headerStyle.navItem } activeClassName={ headerStyle.activeNavItem } to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
