import classes from "./Modal.module.css";

export default function Modal() {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog className={classes.dialog}>
        <ul>
          <li>Frontend</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <p>X</p>
      </dialog>
    </>
  );
}
