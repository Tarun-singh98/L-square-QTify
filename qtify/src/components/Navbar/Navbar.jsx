import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Searchbar from "../Search/Searchbar";
import styles from "./Navbar.module.css";

function Navbar() {
  return <div className={styles.navbar}>
    <Logo/>
    <Searchbar/>
    <Button/>
    </div>;
}

export default Navbar;
