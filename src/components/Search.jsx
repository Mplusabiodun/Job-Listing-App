import classes from "./Search.module.css";

export default function Search() {
  return (
    <div className={classes.parent}>
      <ul>
        <li>
          <p>Frontend</p>
          <span>x</span>
        </li>
        <li>
          <p>CSS</p>
          <span>x</span>
        </li>
        <li>
          <p>Javasript</p>
          <span>x</span>
        </li>
      </ul>
      <p className={classes.clear}>Clear</p>
    </div>
  );
}
