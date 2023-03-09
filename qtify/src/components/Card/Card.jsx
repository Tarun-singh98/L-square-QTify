import React from "react";
import styles from "./Card.module.css";
function Card(props) {
  return (
    <div className={styles.card_area}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <img
            src={require("../../assets/Rectangle2138.png")}
            alt="card_image"
          />
        </div>
        <div className={styles.follow_wrapper}>
          <div className={styles.followers}>{props.followers}</div>
        </div>
        <div className={styles.card_title}>{props.title}</div>
      </div>
    </div>
  );
}

export default Card;
