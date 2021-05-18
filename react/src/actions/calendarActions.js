import axios from "axios";
import {API_BASE_URL} from '../actions/types'
import {
 CALENDAR_LOADING,
 ADD_CALENDAR,
 EDIT_CALENDAR,
 GET_CALENDAR,
 IS_MODIFIED_CALENDAR,
 CLEAR_ERRORS,
 GET_ERRORS

  // SEARCH_EVENT,
} from "./types";
export const addCalendar = (eventData) => dispatch => {
  dispatch(clearErrors()); 
  axios.post(API_BASE_URL +"/calendar/add", eventData)
    .then(res =>
        dispatch({
        type: ADD_CALENDAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};


export const getCalendar = () => dispatch => {
  dispatch(setCalendarLoading());
  axios
    .get(API_BASE_URL + '/calendar')
    .then(res => {
      dispatch({
        type: GET_CALENDAR,
        payload: res.data
      });
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};



export const editCalendar = (eventData) => dispatch => {
  dispatch(clearErrors());
  axios.put(API_BASE_URL + `/calendar/update`, eventData)
    .then(res =>
      dispatch({
        type: EDIT_CALENDAR,
        payload: res.data
      })
    )
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: {
            message: error.response.data,
            visible: true
          }
        })
      }
    })
};

export const setIsModifiedCalendarLoading = () => {
  return {
    type: IS_MODIFIED_CALENDAR
  };
};

// Set loading state
export const setCalendarLoading = () => {
  return {
    type: CALENDAR_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
