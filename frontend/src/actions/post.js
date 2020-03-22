import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get post
export const getPost = postId => async dispatch => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);

    dispatch({ type: GET_POST, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Toggle Like
export const toggleLike = postId => async dispatch => {
  try {
    const res = await axios.post(`/api/posts/${postId}/like`);

    dispatch({ type: UPDATE_LIKES, payload: res.data });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Post
export const deletePost = postId => async dispatch => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({ type: DELETE_POST, payload: postId });
    dispatch(setAlert("Post Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Post
export const addPost = formData => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.post("/api/posts", formData, config);

    dispatch({ type: ADD_POST, payload: res.data });
    dispatch(setAlert("Post Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Comment
export const addComment = (postId, formData) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.post(
      `/api/posts/${postId}/comments`,
      formData,
      config
    );

    dispatch({ type: ADD_COMMENT, payload: res.data });
    dispatch(setAlert("Comment Added", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/comments/${commentId}`);

    dispatch({ type: REMOVE_COMMENT, payload: commentId });
    dispatch(setAlert("Comment Removed", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
