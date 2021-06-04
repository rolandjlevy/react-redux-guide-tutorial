import axios from "axios";
import { USER_DETAILS } from './types';

export const getUserDetails = () => {
  return async (dispatch) => {
    console.log("Step 2: Inside Action Creator to make an API call");
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("Step 3: Dispatch an Action to update the state");
    dispatch({
      type: USER_DETAILS,
      payload: result
    });
  }
}