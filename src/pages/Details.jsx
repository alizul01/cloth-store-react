import React from 'react'
import Header from '../parts/Header'
// import JustArrived from '../parts/HomePage/JustArrived'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'

export default function Details() {
    return (
        <>
            <Header />
            <BreadCrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/9812", name: "Office Room" },
                { url: "/categories/9812/products/9812", name: "Details"}
            ]} />
            <ProductDetails />
            <Suggestion />
            <Sitemap />
            <Footer />
        </>
    )
}
