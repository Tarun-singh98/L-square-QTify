import React from "react";
import styles from "./CardSection.module.css";
import Card from "../Card/Card.jsx";

function CardSection() {
  return (
    <div className={styles.album_section}>
      <div className={styles.album_top}>
        <div className={styles.text1}>Top Albums</div>
        <div className={styles.text2}>Collapse</div>
      </div>
      <Card followers="100 Follows" title="New Bollywood"/>
    </div>
  );
}

export default CardSection;
