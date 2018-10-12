import { FETCH_CAT_DATA_SUCCESS, FETCH_ERROR } from "../actions/cat";

const initialState = {
  data: null,
  error: null,
  loading: false
}

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_CAT_DATA_SUCCESS) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }

}