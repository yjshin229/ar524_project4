import { SET_PROGRESS } from "./actions";

// Initial state
const initialState = {
  progress: "",
};

// Reducer function
const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
};

export default progressReducer;
