import React from 'react'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div>
        <div className={styles.hero_section}>
          <div className={styles.hero_text}>
            <p>100 Thousand Songs, ad-free</p>
            <p>Over thousands podcast episodes</p>
          </div>
          <div className={styles.hero_image}>
          <img src={require("../../assets/vibrating-headphone.png")} alt="hero_image"></img>
          </div>
        </div>
    </div>
  )
}

export default Hero