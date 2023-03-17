import React from "react";
import styles from "./Card.module.css";
import Tooltip from '@mui/material/Tooltip';

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
       
          return (
            <Tooltip title={data.songs.length+" Songs"} placement="top">
            <div className={styles.card}>
              <div className={styles.card_top}>
                <div>
                  <img
                    src={data.image}
                    alt="card_image"
                    className={styles.card_image}
                  />
                </div>
                <div className={styles.follow_wrapper}>
                  <div className={styles.followers_pill}>
                    {data.follows} Follows
                  </div>
                </div>
              </div>
              <div className={styles.card_title}>{data.title}</div>
            </div>
            </Tooltip>
          );
      }
      case "song": {
        
          return (
            <div className={styles.card}>
              <div className={styles.card_top}>
                <div>
                  <img
                    src={data.image}
                    alt="card_image"
                    className={styles.card_image}
                  />
                </div>
                <div className={styles.follow_wrapper}>
                  <div className={styles.followers_pill}>
                    {data.likes} Likes
                  </div>
                </div>
              </div>
              <div className={styles.card_title}>{data.title}</div>
            </div>
          );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
