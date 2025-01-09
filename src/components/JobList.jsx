import classes from "./JobList.module.css";
import SkillsList from "./SkillsList";

import imageName from "../assets/images/photosnap.svg";
// import tryThis from ".";

export default function JobList({ data }) {
  const skills = [data.role, data.level, ...data.tools, ...data.languages];
  return (
    <li className={classes.joblist}>
      <div className={classes.data_container}>
        <img src={imageName} alt={data.company} id={classes.image} />
        <div>
          <div className={classes.photo_new_feature}>
            <h3>{data.company}</h3>
            {data.new && <p className={classes.new}>NEW!</p>}
            {data.featured && <p className={classes.featured}>FEATURED</p>}
          </div>
          <h3 className={classes.senior}>{data.position}</h3>
          <div className={classes.date_loaction}>
            <p>{data.postedAt}</p>
            <ul>
              <li>{data.contract}</li>
              <li>{data.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className={classes.skills}>
        {skills.map((skill, index) => (
          <SkillsList key={index} skill={skill} />
        ))}
      </ul>
    </li>
  );
}
