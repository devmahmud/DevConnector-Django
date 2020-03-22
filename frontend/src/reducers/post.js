import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, actions) {
  const { type, payload } = actions;

  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false };
    case GET_POST:
      return { ...state, post: payload, loading: false };
    case ADD_POST:
      return { ...state, posts: [payload, ...state.posts], loading: false };
    case POST_ERROR:
      return { ...state, error: payload, loading: false };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.id !== payload.id), payload],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter(post => post.id !== payload)],
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          post_comments: [payload, ...state.post.post_comments]
        },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          post_comments: state.post.post_comments.filter(
            comment => comment.id !== payload
          )
        },
        loading: false
      };
    default:
      return state;
  }
}
