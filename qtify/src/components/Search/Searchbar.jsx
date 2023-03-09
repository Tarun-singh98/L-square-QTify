import React from "react";
import styles from './Searchbar.module.css';
function Searchbar() {
  return (
    <div>
      <div className={styles.search}>
      <input className={styles.search_field} placeholder="Search a song of your choice"></input>
      <button className={styles.search_button}>
      <img className="search_icon" src={require("../../assets/Search icon.png")} alt="search icon"></img>
      </button>
      </div>
    </div>
  );
}

export default Searchbar;
