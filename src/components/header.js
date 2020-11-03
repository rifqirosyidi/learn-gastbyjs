import { Link } from 'gatsby'
import React from 'react'

// import './header.module.scss'

// Css Module
import headerStyle from './header.module.scss'

function header() {
    return (
        <div className={ headerStyle.header }>
            <h1><Link className={ headerStyle.title } to="/">Rief</Link></h1>
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

export default header
