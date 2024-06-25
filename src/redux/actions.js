// Define action types
export const SET_PROGRESS = "SET_PROGRESS";

// Action creator for setting progress
export const setProgress = (progress) => ({
  type: SET_PROGRESS,
  payload: progress,
});
