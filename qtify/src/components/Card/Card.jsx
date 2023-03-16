import React from "react";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        return data.map((card) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_top}>
                <div>
                  <img
                    src={card.image}
                    alt="card_image"
                    className={styles.card_image}
                  />
                </div>
                <div className={styles.follow_wrapper}>
                  <div className={styles.followers_pill}>
                    {card.follows} Follows
                  </div>
                </div>
              </div>
              <div className={styles.card_title}>{card.title}</div>
            </div>
          );
        });
      }
      case "song": {
        return data.map((card) => {
          return (
            <div className={styles.card}>
              <div className={styles.card_top}>
                <div>
                  <img
                    src={card.image}
                    alt="card_image"
                    className={styles.card_image}
                  />
                </div>
                <div className={styles.follow_wrapper}>
                  <div className={styles.followers_pill}>
                    {card.likes} Likes
                  </div>
                </div>
              </div>
              <div className={styles.card_title}>{card.title}</div>
            </div>
          );
        });
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
