import React from "react";
import { connect } from "react-redux"


const Joke = ({ setup, punchline }) => {

  console.log(setup)
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Jokinator 9000</h2>
        </div>
        <div className="jokeContents">
          <h3 className="setup">{setup}</h3>
          <h4 className="punchline">{punchline}</h4>
        </div>
        <div className="button">
          <button>Get the punchline!</button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    setup: state.setup,
    punchline: state.punchline,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(Joke);