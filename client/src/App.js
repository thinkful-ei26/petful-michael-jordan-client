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
    if (this.props.dog === null || this.props.cat === null) {
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
              console.log(this.props.dog);
            }}
          >
            Get Dog
          </button>
          <img className="photo" alt="dog" src={this.props.dog.imageURL} />
          <img className="photo" alt="dog" src={this.props.cat.imageURL} />
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
