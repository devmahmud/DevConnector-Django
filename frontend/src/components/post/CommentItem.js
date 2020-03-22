import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const CommentItem = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${comment.user}`}>
          <img className="round-img" src={comment.avatar} alt="" />
          <h4>{comment.name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{comment.text}</p>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{comment.date}</Moment>
        </p>
        {!auth.loading && comment.user === auth.user.id && (
          <button
            onClick={e => dispatch(deleteComment(postId, comment.id))}
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
