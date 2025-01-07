import classes from "./JobList.module.css";

import imageName from "../assets/images/photosnap.svg";

export default function JobList() {
  return (
    <li className={classes.joblist}>
      <img src={imageName} alt="photosnap" id={classes.image} />
      <div>
        <div className={classes.photo_new_feature}>
          <h3>Photosnap</h3>
          <p className={classes.new}>NEW!</p>
          <p className={classes.featured}>FEATURED</p>
        </div>
        <h3 className={classes.senior}>Senior Frontend Developer</h3>
        <div className={classes.date_loaction}>
          <p>1d ago</p>
          <ul>
            <li>Full Time</li>
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
