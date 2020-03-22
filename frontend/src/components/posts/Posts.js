import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import { getPosts } from "../../actions/post";
import PostForm from "./PostForm";

const Posts = () => {
  const { posts, loading } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community!
      </p>
      <PostForm />
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

export default Posts;
