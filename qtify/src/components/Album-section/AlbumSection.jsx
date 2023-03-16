import React, { useEffect, useState } from "react";
import styles from "./AlbumSection.module.css";
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel";

function AlbumSection({ title, dataSource }) {
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
          <h4> {isShowAll ? "Collapse" : "Show All"}</h4>
        </div>
      </div>
      {isShowAll ? (
        <div className={styles.Card_wrapper}>
          <Card data={Cards} type={"album"} />
        </div>
      ) : (
        <Carousel
          data={Cards}
          showData={(data) => {
            <div>Cards</div>;
          // <Card data={data} type={"album"} />;
        }}
        />
      )}
    </div>
  );
}

export default AlbumSection;
