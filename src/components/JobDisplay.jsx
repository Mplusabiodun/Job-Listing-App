import classes from "./JobDisplay.module.css";
import JobList from "./JobList.jsx";

export default function JobDisplay({ jobListing }) {
  console.log(jobListing);
  return (
    <div className={classes.container}>
      <ul className={classes.container2}>
        {jobListing.map((data) => (
          <JobList key={data.id} data={data} />
        ))}
      </ul>

      <div className={classes.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://m-abiodun-fatai.netlify.app">Fatai Monsuru A</a>.
      </div>
    </div>
  );
}
