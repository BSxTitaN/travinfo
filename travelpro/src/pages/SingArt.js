import React, { useEffect } from 'react'
import Singleart from '../components/Articles/Singleart'
import Footer from "../components/Footer";
import Mainnav from '../components/Naavbar/Mainnav';


function SingArt() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <Mainnav />
        <Singleart />
        <Footer />
        </>
    )
}

export default SingArt
