import axios from "axios"

export const GET_JOKE_DETAILS = "GET_JOKE_DETAILS"
export const GET_JOKE_DETAILS_SUCCESS = "GET_JOKE_DETAILS_SUCCESS"
export const GET_JOKE_DETAILS_FAILURE = "GET_JOKE_DETAILS_FAILURE"
export const SET_IS_FETCHING = "SET_IS_FETCHING"


export const getJokeDetails = () => dispatch => {
  dispatch(setIsFetching(true))
  axios.get("https://official-joke-api.appspot.com/random_joke")
  .then(res => {
    // console.log(res)
    const setup = res.data.setup
    const punchline = res.data.punchline
    // console.log(setup)
    // console.log(punchline)
    dispatch(getJokeDetailsSuccess([setup, punchline]))
  })
  .catch(err => {
    console.log(err.message)
    dispatch(getJokeDetailsFailure(err.message))
  })
}

export const setIsFetching = isFetching => {
  return {type: SET_IS_FETCHING, payload: isFetching }
}
export const getJokeDetailsSuccess = jokeDetails => {
  return {type: GET_JOKE_DETAILS_SUCCESS, payload: jokeDetails}
}
export const getJokeDetailsFailure = errorMessage => {
  return {type: GET_JOKE_DETAILS_FAILURE, payload: errorMessage}
}