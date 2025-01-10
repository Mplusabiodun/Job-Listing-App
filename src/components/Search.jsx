import classes from "./Search.module.css";

export default function Search({ onFrontend, onCssJavasript, onClear }) {
  return (
    <div className={classes.parent}>
      <ul>
        <li>
          <p onClick={onFrontend}>Frontend</p>
          <span>x</span>
        </li>
        <li>
          <p onClick={() => onCssJavasript("CSS")}>CSS</p>
          <span>x</span>
        </li>
        <li>
          <p onClick={() => onCssJavasript("JavaScript")}>JavaSript</p>
          <span>x</span>
        </li>
      </ul>
      <p className={classes.clear} onClick={onClear}>
        Clear
      </p>
    </div>
  );
}
