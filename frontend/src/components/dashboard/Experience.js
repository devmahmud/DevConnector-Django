import React, { Fragment } from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  const experiences = experience.map(exp => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td className="hide-sm">
        <Moment format="YYYY/MM/DD">{exp.from_date}</Moment> -{" "}
        {exp.to_date == null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to_date}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteExperience(exp.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
