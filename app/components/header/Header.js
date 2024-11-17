import React from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import EazyfitLogo from '../../../public/eazyfit-logo.svg'
import styles from './header.module.css'
import ImageOne from "../../../public/Rectangle 1.png"
import ImageTwo from "../../../public/Rectangle 2.png"
import MeunIcon from '../MeunIcon';

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <Image
                src={EazyfitLogo}
                width={144}
                alt='eazyfit logo'
                className={styles.logo}
            />
            
            <nav>
                <a className={styles.meunIconWrapper}>
                    <MeunIcon/>
                    {/* <GiHamburgerMenu  className={styles.meunIcon}/> */}
                </a>
                <ul className={styles.navsWrapper}>
                    <li><a target="_blank" href="https://google.com/" rel="noopener noreferrer"></a>works</li>
                    <li> <a target="_blank" href="https://google.com/" rel="noopener noreferrer"></a>about</li>
                    <li> <a target="_blank" href="https://google.com/" rel="noopener noreferrer"></a>contact</li>
                    <li> <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer"></a>instagram </li>
                    <li> <a target="_blank" href="https://tiktok.com/" rel="noopener noreferrer"></a>tiktok</li>
                    <li> <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer"></a>x</li>
                </ul>
            </nav>
        </div>

        <p className={styles.headerFirstParagraph}>Connecting You with Quality Fashion, Delivered with Reliability.</p>

        <div className={styles.flexItems}>
            <div>
                <p className={styles.headersecondParagraph}>Be the first to know when our product is live!</p>

                <div>
                    <label className={styles.headerInputLabel}>Email Address</label>
                    <div className={styles.inputWrapper}>
                        <input placeholder='ex. adeyilegacy@gmail.com'/>
                        <button>join waitlist</button>
                    </div>
                </div>
            </div>

            <p className={styles.headerThirdParagraph}>Join Eazyfit’s fashion marketplace where style meets quality and trust. Get early access now and experience fashion redefined.</p>
        </div>

        <h3 className={styles.scrolldownText}>ScrollDown</h3>
        
        <div className={styles.headerImagesWrapper}>
            <div className={styles.headerImageWrapper}>
                <Image
                    src={ImageOne}
                    alt='image one'
                    style={{"objectFit": "cover", width: "100%", height:"100%"}}
                />

            </div>

            <div className={styles.headerImageWrapper}>
                <Image
                    src={ImageTwo}
                    alt='image Two'
                    style={{"objectFit": "cover", width: "100%", height:"100%"}}
                />
            </div>

            <div className={styles.headerImageWrapper}>
                <Image
                    src={ImageOne}
                    alt='image one'
                    style={{"objectFit": "cover", width: "100%", height:"100%"}}
                />
            </div>
        </div>

         <div className={styles.borderLine}></div>
    </div>
  )
}

export default Header