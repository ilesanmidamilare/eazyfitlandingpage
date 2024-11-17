import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import WhatWeOffer from "./components/whatWeOffer/WhatWeOffer";
import About from './components/about/About'
import KeyFeatures from "./components/keyFeatures/KeyFeatures";
import Reviews from './components/reviews/Reviews'
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <WhatWeOffer/>
      <About/>
      <KeyFeatures/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  );
}
