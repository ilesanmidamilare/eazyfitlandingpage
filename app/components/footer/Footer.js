import React from 'react'
import Image from 'next/image'
import EazyfitLogo from '../../../public/eazyfit-logo.svg'
import styles from './footer.module.css'
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className={styles.footerBgImg}>
        <div className={styles.container}>
            <div className={styles.rightResevered}>
                
                    <p>Easy, fast, affordable.</p>

                <div>    
                    <Image
                        src={EazyfitLogo}
                        width={121}
                        alt='eazyfit logo'
                        className={styles.logo}
                    />
                    <p className={styles.reservedText}>© 2023 All Rights Reserved, Easyfit.</p>
                </div>
            </div>

            <div className={styles.flexItems}>
                <div className={styles.contact}>
                    <p>Support</p>
                    <div className={styles.hide}>
                        <Image
                            src={EazyfitLogo}
                            width={121}
                            alt='eazyfit logo'
                            className={styles.logo}
                        />
                    </div>
                    
                    <p>Have questions? <span className={styles.span}>Get in touch</span>   or check out our <span className={styles.span}>help center</span>   </p>
                    <p>You can also text our support team at   <span className={styles.span}>(234) 773-5384</span> email us at <span className={styles.span}>help@easyfit.com</span></p>
                </div>

                <div className={styles.termsAndPolicyWrapper}>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

            <div className={styles.social}>
                <p>Social</p>
                <div className={styles.socialIconsWrapper}>
                    <BsInstagram className={styles.socialIcon}/>
                    <BsFacebook className={styles.socialIcon}/>
                    <BsTwitterX className={styles.socialIcon}/>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer