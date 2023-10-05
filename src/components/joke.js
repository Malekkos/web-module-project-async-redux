import React from "react";
import { connect } from "react-redux"
import { getJokeDetails } from "../actions";

// API to use ~ https://official-joke-api.appspot.com/random_joke

const Joke = ({ error, setup, punchline, getJokeDetails }) => {

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
        <div className="jokeContents">
          <h3 className="setup">{setup}</h3>
          <h4 className="punchline">{punchline}</h4>
        </div>
        <div className="button">
          <button onClick={getJokeDetails}>Get the punchline!</button>
        </div>
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

export default connect(mapStateToProps, {getJokeDetails})(Joke);