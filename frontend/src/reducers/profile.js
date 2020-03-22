import {
  GET_PROFILE,
  GET_REPOS,
  GET_PROFILES,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GITHUB_ERROR
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return { ...state, profile: payload, loading: false };

    case GET_PROFILES:
      return { ...state, profiles: payload, loading: false };

    case PROFILE_ERROR:
      return { ...state, profile: null, loading: false, error: payload };

    case CLEAR_PROFILE:
      return { ...state, profile: null, loading: false, repos: [] };

    case GET_REPOS:
      return { ...state, loading: false, repos: payload };

    case GITHUB_ERROR:
      return { ...state, loading: false, repos: [] };

    default:
      return state;
  }
}
