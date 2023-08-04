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
const getListStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const getListReducer = (state = getListStateInitial, action) => {
  switch (action.type) {
    case GET_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case GET_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const addListStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const addListReducer = (state = addListStateInitial, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case ADD_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const editListStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const editListReducer = (state = editListStateInitial, action) => {
  switch (action.type) {
    case UPDATE_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case UPDATE_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

const deleteListStateInitial = {
  loading: false,
  data: null,
  error: null,
};

export const deleteListReducer = (state = deleteListStateInitial, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case DELETE_FAILED:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
