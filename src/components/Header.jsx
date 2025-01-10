import classes from "./Header.module.css";

import hamburger from "../assets/images/hamburger.png";
import Modal from "./Modal.jsx";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <img src={hamburger} alt="hamburger" id={classes.hamburger} />
        <Modal />
      </header>
    </>
  );
}
