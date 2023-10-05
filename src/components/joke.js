import React from "react";
import { connect } from "react-redux"
import { getJokeDetails, reset } from "../actions";

// API to use ~ https://official-joke-api.appspot.com/random_joke

// Three buttons. 
// One for getting joke details aka. changes to state
// 1 each for showcasing the setup and punchline.



const Joke = ({ error, setup, punchline, getJokeDetails, reset}) => {

  // console.log(setup)
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>The Jokinator</h2>
        </div>
        <div>
          <h1>{error}</h1>
        </div>
        <div className="button">
          <button onClick={getJokeDetails}>Get the joke details...</button>
        </div>
        <div className="jokeContents">
          <h4 className="setup">{setup}</h4>
          <h4 className="punchline">{punchline}</h4>
        </div>
        <button onClick={reset}>Reset...</button>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    setup: state.setup,
    punchline: state.punchline,
    error: state.error
  }
}

export default connect(mapStateToProps, {getJokeDetails, reset})(Joke);