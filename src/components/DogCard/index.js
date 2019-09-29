import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card" onClick={() => props.alreadyClicked(props.id)}>
      <div className="img-container">
        <img alt={props.breed} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Breed:</strong> {props.breed} 
          </li>
          <li>
            <strong>Temperament:</strong> {props.temperament}
          </li>
          <li>
            <strong>AKC Group:</strong> {props.group}
          </li>
        </ul>
      </div>
    </div>
  ); 
}

export default DogCard;
