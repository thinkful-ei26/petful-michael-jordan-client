import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { fetchDogs, fetchCats, setName } from "./actions/adopt";
import { deleteDogs, deleteCats } from "./actions/delete";

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchDogs());
    this.props.dispatch(fetchCats());
  }

  displayAdopted(name) {}

  onLoad() {
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
          <header>Michael and Jordan's Adoption Agency</header>
          <br />
          <br />
          <button
            onClick={() => {
              this.props.dispatch(setName(this.props.dog.name));
              this.props.dispatch(deleteDogs());
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
              this.props.dispatch(setName(this.props.cat.name));
              this.props.dispatch(deleteCats());
              console.log(this.props.cat.name);
            }}
          >
            Get Cat
          </button>
          <span>{this.props.name}</span>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  dog: state.adoptable.dog,
  cat: state.adoptable.cat,
  name: state.adoptable.name
});

export default connect(mapStateToProps)(App);
