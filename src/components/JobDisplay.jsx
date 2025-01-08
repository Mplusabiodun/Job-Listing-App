import classes from "./JobDisplay.module.css";
import JobList from "./JobList.jsx";
import info from "../../data.json";

export default function JobDisplay() {
  console.log(info);
  return (
    <div className={classes.container}>
      <ul className={classes.container2}>
        {info.map((data) => (
          <JobList key={data.id} data={data} />
        ))}
      </ul>
    </div>
  );
}
