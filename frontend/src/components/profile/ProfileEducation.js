import React from "react";
import Moment from "react-moment";

const ProfileEducation = ({
  education: {
    school,
    degree,
    field_of_study,
    current,
    to_date,
    from_date,
    description
  }
}) => {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from_date}</Moment> -{" "}
        {!to_date ? " Now" : <Moment format="YYYY/MM/DD">{to_date}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Studey: </strong>
        {field_of_study}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

export default ProfileEducation;
