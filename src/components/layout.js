import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

function layout(props) {
    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    )
}

export default layout
