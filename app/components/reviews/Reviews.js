import React from 'react'
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";
import styles from './review.module.css'
import Image from 'next/image';
import ReviewerImage from "../../../public/reviewer-img.png"

function Reviews() {
  return (
    <div className={styles.addBgColor}>
        <div className={styles.container}>
            <p className={styles.reviewsTitleText}>Hear from our customers</p>

            <div className={styles.flexItems}>
                <div className={styles.columnReverse}>
                    <div className={styles.reviewArrowsWrapper}>
                        <IoArrowBackOutline  className={styles.arrow}/>
                        <IoArrowForwardOutline  className={[styles.active]}/>
                    </div>

                    <div className={styles.customerImgWrapper}>
                         <Image
                            src={ReviewerImage}
                            alt='image one'
                            style={{"objectFit": "cover", width: "100%", height:"100%", borderRadius: '20px'}}
                        />
                    </div>
                </div>

                <div >
                    <p className={styles.customerReviewText}>
                        &quot;Now that I can speak, I am absolutely   thriving. Negotiating treats with Kevin. Ordering     take out using Amazon Alexa.  Setting up dates with babes using Siri. I love 
                        Easyfit so much.&quot;
                    </p>

                    <div className={styles.customerDetailsWrapper}>
                        <div className={styles.customerDetail}>
                            <div className={styles.borderLine}></div>
                            <p>Bandit</p>
                            <p>Akita</p>
                        </div>

                        <div className={styles.customerDetail}>
                            <div className={styles.borderLine}></div>
                            <p>Kingsley</p>
                            <p>Yorkshire Terrier</p>
                        </div>

                        <div className={styles.customerDetail}>
                            <div className={styles.borderLine}></div>
                            <p>Lilo</p>
                            <p>Dalmation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews