import React from "react";
import { Link } from 'react-router-dom';

import "../App.css";

export default function DisplayInfo(props) {
        return (
            <React.Fragment>
                <div className="header">
                    <h1>Michael and Jordan's Adoption Agency</h1>
                </div>
                <div className="animal-display-info">
                <img className="display-img" alt="animal" src={props.location.state.animal.imageURL} />
                    <ul className="display-info">
                        <li>{props.location.state.animal.name}</li>
                        <li>{props.location.state.animal.age}</li>
                        <li>{props.location.state.animal.sex}</li>
                        <li>{props.location.state.animal.breed}</li>
                        <li>{props.location.state.animal.story}</li>
                    </ul>
                    <Link to="/">Home Page</Link>
                </div>
            </React.Fragment>
        )
}