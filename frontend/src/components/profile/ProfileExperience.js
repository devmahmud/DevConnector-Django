import React from "react";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: {
    company,
    title,
    location,
    current,
    to_date,
    from_date,
    description
  }
}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from_date}</Moment> -{" "}
        {!to_date ? " Now" : <Moment format="YYYY/MM/DD">{to_date}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileExperience;
