import { API_BASE_URL } from "../config";

export const FETCH_CAT_DATA_SUCCESS = 'FETCH_CAT_DATA_SUCCESS';
export const fetchCatDataSuccess = data => ({
  type: FETCH_CAT_DATA_SUCCESS,
  data
});
// Possibly need a error
export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = error => ({
  type: FETCH_ERROR,
  error
});

export const catData = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'GET',

  })
    .then(res => res.json())
    .then(data => dispatch(fetchCatDataSuccess(data)))
    .catch(err => {
      dispatch(fetchError(err));
    });
}

// DELETE
// export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
// export const adoptCatSuccess = () => ({
//   type: DELETE_CAT_SUCCESS,

export const adoptCat = () => dispatch => {
  fetch(`${API_BASE_URL}/cat`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(() => {
      dispatch(catData());
    })
    .catch(err => {
      dispatch(fetchError(err))
    })
}