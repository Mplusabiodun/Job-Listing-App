import classes from "./JobDisplay.module.css";
import JobList from "./JobList.jsx";

export default function JobDisplay() {
  return (
    <div className={classes.container}>
      <ul className={classes.container2}>
        <JobList />
      </ul>
    </div>
  );
}
