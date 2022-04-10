import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Hosting from '../components/Hosting';
import Article from '../components/Articles/Article';
import Mainnav from '../components/Naavbar/Mainnav';


export default function Index() {
  useEffect(() => {
    window.scrollTo(0,0)
}, [])

  // const history = useNavigate();
  return (
    <>
    <Mainnav />
      <main>
        <Hero />
        <Banner />
        <Article />
        <Hosting />
      </main>

      <Footer />
    </>
  );
}

