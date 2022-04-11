import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Support from '../components/Naavbar/Support';
import Banner from '../components/work/Banner';
import Desc from '../components/work/Desc';

function Work() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

  return (
    <>
    <Support />
    <Banner />
    <Desc />
    <Footer />
    </>
  )
}

export default Work