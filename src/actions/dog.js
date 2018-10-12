import { API_BASE_URL } from "../config";

export const FETCH_DOG_DATA_SUCCESS = 'FETCH_DOG_DATA_SUCCESS';
export const fetchDogDataSuccess = data => ({
  type: FETCH_DOG_DATA_SUCCESS,
  data
});
// Possibly need a error for data
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const dogData = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/Dog`, {
    method: 'GET',

  })
    .then(res => res.json())
    .then(data => dispatch(fetchDogDataSuccess(data)))
    .catch(err => {
      dispatch(fetchError(err));
    });
}

export const adoptDog = () => dispatch => {
  fetch(`${API_BASE_URL}/dog`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(() => {
      dispatch(dogData());
    })
    .catch(err => {
      dispatch(fetchError(err))
    })
}