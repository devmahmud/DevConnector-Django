import axios from "axios";
import { setAlert } from "../actions/alert";

import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  GITHUB_ERROR,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from "./types";

// Get Current User Profile
export const getCurrentProfile = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get All Profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles");
    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/${userId}`);
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Github Repos
export const getGithubRepos = username => async dispatch => {
  try {
    const res = await axios.get(`/api/github/${username}`);
    dispatch({ type: GET_REPOS, payload: res.data });
  } catch (err) {
    dispatch({
      type: GITHUB_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("/api/profile", body, config);

    dispatch({ type: GET_PROFILE, payload: res.data });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data;

    if (errors["status"]) {
      errors["status"].forEach(msg =>
        dispatch(setAlert(`Status: ${msg}`, "danger"))
      );
    }

    if (errors["skills"]) {
      errors["skills"].forEach(msg =>
        dispatch(setAlert(`Skills: ${msg}`, "danger"))
      );
    }

    if (errors["bio"]) {
      errors["bio"].forEach(msg => dispatch(setAlert(`Bio: ${msg}`, "danger")));
    }

    if (errors["website"]) {
      errors["website"].forEach(msg =>
        dispatch(setAlert(`Website: ${msg}`, "danger"))
      );
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Experience
export const addExperience = (formData, history) => async dispatch => {
  try {
    if (formData["to_date"] === "") {
      delete formData.to_date;
    }
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);
    const res = await axios.post("/api/profile/experience", body, config);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Experience added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data;

    if (errors["title"]) {
      errors["title"].forEach(msg =>
        dispatch(setAlert(`Title: ${msg}`, "danger"))
      );
    }

    if (errors["company"]) {
      errors["company"].forEach(msg =>
        dispatch(setAlert(`Company: ${msg}`, "danger"))
      );
    }

    if (errors["location"]) {
      errors["location"].forEach(msg =>
        dispatch(setAlert(`Location: ${msg}`, "danger"))
      );
    }

    if (errors["from_date"]) {
      dispatch(setAlert("From Date is required", "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Education
export const addEducation = (formData, history) => async dispatch => {
  try {
    if (formData["to_date"] === "") {
      delete formData.to_date;
    }
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);
    const res = await axios.post("/api/profile/education", body, config);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
    dispatch(setAlert("Education added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data;

    if (errors["school"]) {
      errors["school"].forEach(msg =>
        dispatch(setAlert(`School: ${msg}`, "danger"))
      );
    }

    if (errors["degree"]) {
      errors["degree"].forEach(msg =>
        dispatch(setAlert(`Degree: ${msg}`, "danger"))
      );
    }

    if (errors["field_of_study"]) {
      errors["field_of_study"].forEach(msg =>
        dispatch(setAlert(`Field of Study: ${msg}`, "danger"))
      );
    }

    if (errors["from_date"]) {
      dispatch(setAlert("From Date is required", "danger"));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Experience
export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/experience/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    dispatch(setAlert("Experience Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Education
export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profile/education/${id}`);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });

    dispatch(setAlert("Education Removed", "success"));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Account and profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete("/api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your account has been deleted permanently"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
