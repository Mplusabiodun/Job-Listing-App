import classes from "./Header.module.css";

import hamburger from "../assets/images/Hamburger.png";
import Modal from "./Modal.jsx";
import { useState } from "react";

export default function Header({
  onFrontendFilter,
  onCssJavasriptFilter,
  onClearFilter,
}) {
  const [showModal, setShowModal] = useState(false);
  function handleChange() {
    setShowModal((prevState) => !prevState);
  }
  return (
    <>
      <header className={classes.header}>
        {!showModal && (
          <img
            src={hamburger}
            alt="hamburger"
            id={classes.hamburger}
            onClick={handleChange}
          />
        )}
        {showModal && (
          <Modal
            onHandleChange={handleChange}
            onFrontend={onFrontendFilter}
            onCssJavascript={onCssJavasriptFilter}
            onClear={onClearFilter}
            showModal={showModal}
          />
        )}
      </header>
    </>
  );
}
