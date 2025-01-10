import classes from "./Modal.module.css";

export default function Modal({
  onHandleChange,
  onFrontend,
  onCssJavascript,
  onClear,
}) {
  function filterFrontEnd() {
    onFrontend("Frontend");
    onHandleChange();
  }
  function filterCssJavascript(interest) {
    onCssJavascript(interest);
    onHandleChange();
  }
  function cancelHandler() {
    onClear();
    onHandleChange();
  }
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog className={classes.dialog} open>
        <ul>
          <li onClick={filterFrontEnd}>Frontend</li>
          <li onClick={() => filterCssJavascript("CSS")}>CSS</li>
          <li onClick={() => filterCssJavascript("JavaScript")}>JavaScript</li>
        </ul>
        <p onClick={cancelHandler}>X</p>
      </dialog>
    </>
  );
}
