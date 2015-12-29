import { SPROJECT_JSON_REQUEST, SPROJECT_JSON_SUCCESS, SPROJECT_JSON_FAILURE } from '../constants/ActionTypes';

export function sProjectJsonRequest() {
  return {
    type: 'SPROJECT_JSON_REQUEST'
  };
}

export function sProjectJsonSuccess(data) {
  return {
    type: 'SPROJECT_JSON_SUCCESS',
    data
  };
}

export function fetchSProjectJson() {

  return dispatch => {
    dispatch(sProjectJsonRequest());

    return fetch(`http://localhost:3000/getSProjectJson`)
      .then(response => response.json())
      .then(json => dispatch(sProjectJsonSuccess(json)));
  }

}
