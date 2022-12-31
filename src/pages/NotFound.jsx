import React from 'react'
import Header from '../parts/Header'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import PageErrorMessages from '../parts/PageErrorMessages'

export default function NotFound() {
    return (
        <>
            <Header theme={"black"} />
            <PageErrorMessages  />
            <Sitemap />
            <Footer />
        </>
    )
}
