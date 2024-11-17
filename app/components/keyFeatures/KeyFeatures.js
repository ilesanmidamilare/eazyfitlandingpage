import React from 'react'
import styles from './keyFeatures.module.css'

function KeyFeatures() {
  return (
    <div className={styles.container}>
        <p className={styles.KeyFeaturesTitleText}>Key Features</p>
        <div className={styles.KeyFeaturesWrapper}>
            <div className={styles.KeyFeatureWrapper}>
                <p>1.</p>
                <p>Fabric Sourcing Made Simple: </p>
                <p>Choose from quality fabrics offered by stylists, so you never have to worry about sourcing materials.</p>
            </div>   

            <div className={styles.KeyFeatureWrapper}>
                <p>2.</p>
                <p>Quality Assurance Process:  </p>
                <p>Say goodbye to “what you ordered vs. what you got” nightmares with our rigorous quality checks.</p>
            </div>    

            <div className={styles.KeyFeatureWrapper}>
                <p>3.</p>
                <p>Reliable Delivery Worldwide:  </p>
                <p>Affordable, dependable logistics to make delivery smooth.</p>
            </div>    

            <div className={styles.KeyFeatureWrapper}>
                <p>4.</p>
                <p>Accountability & Trust: </p>
                <p>A rating system that holds stylists accountable, fostering reliability and long-term relationships.</p>
            </div>      
        </div>
        
    </div>
  )
}

export default KeyFeatures