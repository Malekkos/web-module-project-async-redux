import { GET_JOKE_DETAILS_SUCCESS, GET_JOKE_DETAILS_FAILURE, SET_IS_FETCHING, RESET } from "../actions";

const initialState = {
  setup: "Generate a joke!",
  punchline: "",
  displayPunchline: false,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE_DETAILS_SUCCESS:
      // console.log(action.payload) 
      return {
         ...state,
         setup: action.payload[0],
         punchline: action.payload[1],
         isFetching: false,
        }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case GET_JOKE_DETAILS_FAILURE:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    case RESET:
      return {
        ...state,
        error: initialState.error,
        displayPunchline: initialState.displayPunchline,
        isFetching: initialState.isFetching,
        setup: initialState.setup,
        punchline: initialState.punchline
      }
    default:
      return state;
  }
}