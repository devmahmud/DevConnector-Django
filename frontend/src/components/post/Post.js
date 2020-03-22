import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import PostItem from "../posts/PostItem";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";

const Post = ({ match }) => {
  const { post, loading } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>

      <PostItem post={post} showActions={false} />
      <CommentForm postId={post.id} />
      <div className="comments">
        {post.post_comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} postId={post.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Post;
