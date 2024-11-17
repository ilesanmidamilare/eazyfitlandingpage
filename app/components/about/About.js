import React from 'react'
import styles from './about.module.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import QualityAssuranceIcon from "../../../public/quality.png"
import TimelyDeliveryIcon from "../../../public/time-delivery.png"
import EasyAcesssIcon from "../../../public/easy.png"
import Image from 'next/image';

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.aboutTitleWrapper}>
            <p>About Us</p>
            <HiOutlineArrowLongRight className={styles.longArrow}/>
            <p>Our Mission</p>
        </div>

        <div className={styles.flexItems}>
            
            <p className={styles.aboutFirstParagraph}>Bridging the Gap Between Fashion Designers and Customers</p>

            <div>
                <div className={styles.webWhyUsBg}>
                    <p className={styles.webWhyUsText}>Why us?</p>    
                </div>
                <p className={styles.aboutSecondParagraph}>At Eazyfit, we understand the challenges of finding reliable fashion stylists who deliver exactly what you envision. Our platform connects you with skilled designers and ensures every order meets your expectations—on time, every time.</p>
            </div>
        </div>

        <div className={styles.addBgColorToWhyUs}>
            <p className={styles.whyUsTitleText}>Why us?</p>
            <div className={styles.whyUsLists}>
                <div className={styles.whyUsList}>
                    <Image
                        src={ QualityAssuranceIcon}
                        alt='quality assurance icon'
                    />
                    <p className={styles.whyUsListFirstParagraph}>Quality Assurance</p>
                    <p className={styles.whyUsListSecondParagraph}>No more surprises! What you see is what you get.</p>
                </div>

                <div className={styles.whyUsList}>
                    <Image
                        src={TimelyDeliveryIcon}
                        alt='time delivery icon'
                    />
                    <p className={styles.whyUsListFirstParagraph}>Timely Delivery</p>
                    <p className={styles.whyUsListSecondParagraph}>Avoid delays with our reliable logistics partnerships.</p>
                </div>

                <div className={styles.whyUsList}>
                    <Image
                        src={EasyAcesssIcon}
                        alt='easy access to stylist icon'
                    />
                    <p className={styles.whyUsListFirstParagraph}>Easy Access to Stylists</p>
                    <p className={styles.whyUsListSecondParagraph}>Discover fashion designers with ease, wherever you are.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About