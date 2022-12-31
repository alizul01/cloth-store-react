import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/HomePage/Hero'
import JustArrived from '../parts/HomePage/JustArrived'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import useScrollAnchors from '../helpers/hooks/useScrollAnchors'
import useModalDom from '../helpers/hooks/useModalDom'

export default function Home() {
    useScrollAnchors();
    useModalDom();
    return (
        <>
            <Header theme={"white"} position={"absolute"} />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <Sitemap />
            <Footer />
        </>
    )
}
