import React, { useEffect, useState } from "react";
import styles from "./AlbumSection.module.css";
import Card from "../Card/Card.jsx";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

function AlbumSection({ title, type, dataSource, filterSource }) {
  const [Cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [filters, setFilters] = useState([{ key: "all", label: "ALL" }]);

  useEffect(() => {
    dataSource().then((response) => setCards(response));
    if (filterSource) {
      filterSource().then((response) => {
        // console.log(response);
        const { data } = response;
        // console.log(data);
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  // console.log(Cards);
  // console.log(filters);

  const filterCards = Cards?.filter((card) =>
    selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );
  // console.log(filterCards);

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
      {filterSource && (
        <Filters
          filters={filters}
          selectFilterIndex={selectedFilterIndex}
          setSelectFilterIndex={setSelectedFilterIndex}
        />
      )}
      {isShowAll ? (
        <div className={styles.Card_wrapper}>
          {filterCards.map((card) => (
            <Card data={card} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={filterCards}
          showData={(data) => <Card data={data} type={type} />}
        />
      )}
    </div>
  );
}

export default AlbumSection;
