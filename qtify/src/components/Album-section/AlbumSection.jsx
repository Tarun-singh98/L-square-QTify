import React, { useEffect, useState } from "react";
import styles from "./AlbumSection.module.css";
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel";

function AlbumSection({ title, type, dataSource }) {
  const [Cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    dataSource().then((response) => setCards(response));
  }, []);

  const handleToggle = () => {
    setIsShowAll((prevState) => !prevState);
  };

  return (
    <div className={styles.album_section}>
      <div className={styles.album_top}>
        <div className={styles.text1}>{title}</div>
        <div className={styles.text2} onClick={handleToggle}>
          {type === "song" ? (
            ""
          ) : (
            <h4> {isShowAll ? "Collapse" : "Show All"}</h4>
          )}
        </div>
      </div>
      {isShowAll ? (
        <div className={styles.Card_wrapper}>
          {Cards.map((card) => (
            <Card data={card} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={Cards}
          showData={(data) => <Card data={data} type={type} />}
        />
      )}
    </div>
  );
}

export default AlbumSection;
