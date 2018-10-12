import { FETCH_DOG_DATA_SUCCESS, FETCH_DOG_ERROR } from "../actions/dog";

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_DOG_DATA_SUCCESS) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }

}