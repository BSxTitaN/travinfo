import React, { useEffect } from 'react'
import Mainart from '../components/Articles/Mainart'
import Footer from '../components/Footer'
import ArtBanner from '../components/Articles/ArtBanner'
import Mainnav from '../components/Naavbar/Mainnav'


function Art() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
        <Mainnav />
        <ArtBanner />
        <Mainart />
        <Footer />
        </>
    )
}

export default Art
