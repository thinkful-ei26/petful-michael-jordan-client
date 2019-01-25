import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./App.css";
import { connect } from "react-redux";
import { fetchDogs, fetchCats, setName } from "./actions/adopt";
import { deleteDogs, deleteCats } from "./actions/delete";

class App extends React.Component {
  componentWillMount() {
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
        <div className="App-Content">
          <div className="box">
            <h1>Michael and Jordan's Adoption Agency</h1>
          </div>
          <br />
          <br />
          <div className="photo">
            <ul>
              <li>
                <Link to={{
                  pathname: './moreinfo',
                  state: {
                    animal: this.props.dog,
                  }
                }}>
                Learn more about {this.props.dog.name}
                </Link>
                <img alt="dog" src={this.props.dog.imageURL} />
                <button
                  onClick={() => {
                    this.props.dispatch(setName(this.props.dog.name));
                    this.props.dispatch(deleteDogs());
                  }}
                >
                  Adopt {this.props.dog.name}
                </button>
              </li>
              <li>
              <Link to={{
                  pathname: './moreinfo',
                  state: {
                    animal: this.props.cat,
                  }
                }}>
                Learn more about {this.props.cat.name}
                </Link>
                <img className="photo" alt="cat" src={this.props.cat.imageURL}/>
                <button
                  onClick={() => {
                    this.props.dispatch(setName(this.props.cat.name));
                    this.props.dispatch(deleteCats());
                  }}
                >
                  Adopt {this.props.cat.name}
                </button>
              </li>
            </ul>
          </div>
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
