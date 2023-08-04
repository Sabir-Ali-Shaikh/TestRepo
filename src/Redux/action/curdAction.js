import axios from "axios";
import {
  GET_REQUEST,
  GET_FAILED,
  GET_SUCCESS,
  ADD_FAILED,
  ADD_REQUEST,
  ADD_SUCCESS,
  UPDATE_FAILED,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  DELETE_FAILED,
  DELETE_REQUEST,
  DELETE_SUCCESS,
} from "../constant/curdConstant";

const API = process.env.REACT_APP_NODE_API;
const Token = process.env.REACT_APP_ACCESS_TOKEN;

export const getList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_REQUEST,
    });
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDc1YTBlNjExNDRjMTE2NjhhY2U1NmMiLCJlbWFpbCI6Im5pbG95Lm1Ac3ltbGlua3RlY2guY29tIiwiZmlyc3ROYW1lIjoiTmlsb3kiLCJsYXN0TmFtZSI6Ik1vbmRhbCIsImlhdCI6MTY5MTEzODk4MiwiZXhwIjoxNjkxMTUzMzgyfQ.9fjOYLawTNLsn_7LB86Ep2sYNMOa_KhonNkDH9f0poE`,
    };
    const { data } = await axios.get(`${API}/list`, { headers });

    dispatch({
      type: GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const addList = (formdata) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_REQUEST,
    });
    const headers = {
      Authorization: `Bearer ${Token}`,
    };
    const body = formdata;
    const { data } = await axios.post(`${API}/add`, body, { headers });

    dispatch({
      type: ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const editList = (formdata) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_REQUEST,
    });
    const headers = {
      Authorization: `Bearer ${Token}`,
    };
    const body = formdata;
    const { data } = await axios.put(`${API}/edit`, body, { headers });

    dispatch({
      type: UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_FAILED,
      payload: error.response.data.message,
    });
  }
};

export const deleteList = (id, org) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_REQUEST,
    });
    const headers = {
      Authorization: `Bearer ${Token}`,
    };
    const body = {
      id: id,
      organization: org,
    };
    const { data } = await axios.delete(`${API}/edit`, body, { headers });

    dispatch({
      type: DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_FAILED,
      payload: error.response.data.message,
    });
  }
};
