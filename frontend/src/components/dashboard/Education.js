import React, { Fragment } from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education }) => {
  const dispatch = useDispatch();

  const educations =
    education &&
    education.map(edu => (
      <tr key={edu.id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{edu.from_date}</Moment> -{" "}
          {edu.to_date == null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to_date}</Moment>
          )}
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteEducation(edu.id))}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

export default Education;
