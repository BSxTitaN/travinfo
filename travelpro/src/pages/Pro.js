import React, { useEffect } from 'react'
import Footer from "../components/Footer"
import Mainnav from '../components/Naavbar/Mainnav'
import Profile from '../components/Profile/Profile'

function Pro() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <Mainnav />
        <Profile />
        <Footer />
        </>
    )
}

export default Pro
