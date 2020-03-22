import React, { Fragment } from "react";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
        </Fragment>
      )}
      <div className="line"></div>
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {skills
          .trim()
          .split(",")
          .map((skill, i) => (
            <div className="p-1" key={i}>
              <i className="fa fa-check"></i>
              {skill}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileAbout;
