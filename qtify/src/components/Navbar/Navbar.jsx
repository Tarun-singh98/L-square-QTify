import React from "react";
import Btn from "../Button/Button";
import Logo from "../Logo/Logo";
import Searchbar from "../Search/Searchbar";
import styles from "./Navbar.module.css";
import ModalComponent from "../Modal/Modal";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className={styles.navbar}>
      <Logo />
      <Searchbar />
      <div>
        <Btn buttonText={"Give Feedback"} handleChange={handleOpen} />
        <ModalComponent open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
