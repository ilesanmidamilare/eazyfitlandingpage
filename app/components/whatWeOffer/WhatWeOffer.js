import React from 'react'
import styles from './whatWeOffer.module.css';
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import Image from 'next/image';
import ImageOne from "../../../public/Rectangle 1.png"
import ImageTwo from "../../../public/Rectangle 2.png"
import ImageThree from "../../../public/Rectangle 3.png"

function WhatWeOffer() {
  return (
    <div className={styles.container}>
        <p className={styles.offerFirstParagraph}>What We Offer</p>
        <div className={styles.flexItems}>
          <p className={styles.offerSecondParagraph}>A Fashion Marketplace Tailored to Your Needs</p>
          <p className={styles.offerThirdParagraph}>Our marketplace is designed for <span className={styles.span}>men</span>  and  <span className={styles.span}>women</span> in <span className={styles.span}>Nigeria</span> , the <span className={styles.span}>USA</span> , and the <span className={styles.span}>UK</span>  who value quality, convenience, and reliable fashion connections.</p>
        </div>
        <div className={styles.offerArrowsWrapper}>
            <IoArrowBackOutline  className={styles.arrow}/>
            <IoArrowForwardOutline  className={styles.arrow}/>
        </div>

        <div className={styles.offerImagesWrapper}>
            <div className={styles.offerImageWrapper}>
              <Image
                src={ImageOne}
                alt='image One'
                style={{"objectFit": "cover", width: "100%", height:"100%"}}
              />
              <diV className={styles.offerImageDetails}>
                  <div>
                    <p className={styles.wearName}>English Wears</p>
                    <p  className={styles.gender}>Men</p>
                  </div>

                  <p  className={styles.viewmoreText}>View more</p>
              </diV>
            </div>

            <div className={styles.offerImageWrapper}>
              <Image
                src={ImageTwo}
                alt='image Two'
                style={{"objectFit": "cover", width: "100%", height:"100%"}}
              />
              <diV className={styles.offerImageDetails}>
                  <div>
                    <p className={styles.wearName}>Pants Trousers</p>
                    <p  className={styles.gender}>Women</p>
                  </div>

                  <p  className={styles.viewmoreText}>View more</p>
              </diV>
            </div>

            <div className={styles.offerImageWrapper}>
              <Image
                src={ImageThree}
                alt='image three'
                style={{"objectFit": "cover", width: "100%", height:"100%"}}
              />
              <diV className={styles.offerImageDetails}>
                  <div>
                    <p className={styles.wearName}>Native Wears</p>
                    <p  className={styles.gender}>Women</p>
                  </div>

                  <p  className={styles.viewmoreText}>View more</p>
              </diV>
            </div>
           
        </div>
        
        <div className={styles.borderLine}></div>
    </div>
  )
}

export default WhatWeOffer