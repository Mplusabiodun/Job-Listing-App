import classes from "./JobList.module.css";

import imageName from "../assets/images/photosnap.svg";

export default function JobList() {
  return (
    <li className={classes.joblist}>
      <img src={imageName} alt="photosnap" id={classes.image} />
      <div>
        <div>
          <h3>Photosnap</h3>
          <p>NEW!</p>
          <p>FEATURED</p>
        </div>
        <h3>Senior Frontend Developer</h3>
        <div>
          <p>1d ago</p>
          <ul>
            <li>Full time</li>
            <li>USA only</li>
          </ul>
        </div>
      </div>
      <ul className={classes.skills}>
        <li>Frontend</li>
        <li>Senior</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javasript</li>
      </ul>
    </li>
  );
}
