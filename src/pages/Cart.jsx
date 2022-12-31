import React from 'react'
import Header from '../parts/Header'
// import JustArrived from '../parts/HomePage/JustArrived'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetails from '../parts/Cart/ShippingDetails'

export default function Cart() {
    return (
        <>
            <Header />
            <BreadCrumb list={[
                { url: "/", name: "Home" },
                { url: "/cart", name: "Shopping Cart" },
            ]} />
            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetails />
                    </div>
                </div>
            </section>
            <Sitemap />
            <Footer />
        </>
    )
}
