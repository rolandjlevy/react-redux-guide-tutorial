/* eslint-disable import/no-anonymous-default-export */

import { USER_DETAILS } from '../actions/types';

const initialState = {
  userDetails: {}
}

export default function (state = initialState, action) {

  console.log("Step 4: Inside User Reducer after action creator dispatches an action");
  
  switch (action.type) {
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
}