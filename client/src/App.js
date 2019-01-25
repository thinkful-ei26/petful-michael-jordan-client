import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { fetchAdoptions } from "./actions/adopt";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAdoptions());
  }
  render() {
    return (
      <div className="App">
        <span>{this.props.dog}</span>
        <span>{this.props.dog}</span>
        <button onclick={() => this.props.dispatch(fetchAdoptions)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dog: state.adoptable.dog,
  cat: state.adoptable.cat
});

export default connect(mapStateToProps)(App);
