import React from "react";
import styles from "./Button.module.css";

function Btn({ buttonText , handleChange}) {
  return (
    <div>
      <button className={styles.button} onClick={handleChange}>{buttonText}</button>
    </div>
  );
}

export default Btn;
