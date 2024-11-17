import React from 'react'
import Image from 'next/image'
import styles from './contact.module.css'
import EazyfitLogo from '../../../public/eazyfit-logo.svg'

function Contact() {
  return (
    <div className={styles.contactBgImg}>
        <div className={styles.container}>
            <div className={styles.logoWrapper}>
                <Image
                    src={EazyfitLogo}
                    width={144}
                    alt='eazyfit logo'
                    className={styles.logo}
                />
            </div>
            
            <p className={styles.contactParagraph}>Be the first to know when our product is live</p>
            <label className={styles.contactInputLabel}>Email Address</label>   
            <input placeholder='ex. adeyilegacy@gmail.com'  className={styles.contactInput}/>
            <button  className={styles.contactButton}>join waitlist</button>
        </div>
    </div>
  )
}

export default Contact