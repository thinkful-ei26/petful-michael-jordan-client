import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { fetchDogs, fetchCats } from "./actions/adopt";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDogs());
    this.props.dispatch(fetchCats());
  }
  render() {
    if (this.props.dog === null) {
      return (
        <div className="App">
          <button
            onClick={() => {
              this.props.dispatch(fetchDogs());
              this.props.dispatch(fetchCats());
            }}
          >
            Get Adoptions
          </button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <button
            onClick={() => {
              console.log(this.props.dog.name);
            }}
          >
            Get Dog
          </button>
          <img src={this.props.dog.imgUrl} />
          <button
            onClick={() => {
              console.log(this.props.cat.name);
            }}
          >
            Get Cat
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  dog: state.adoptable.dog,
  cat: state.adoptable.cat
});

export default connect(mapStateToProps)(App);
