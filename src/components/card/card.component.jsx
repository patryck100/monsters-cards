import React from "react";
import "./card.styles.css";

export const Card = ({ monster }) => (
  //When using the dollar simbol, it is exchanging whatever char comes next for what comes from the function within the curly brackets
  //use "&" char to add more parameter into the robo webpage, example &size=220x220
  //link: https://robohash.org/1?set=set2
  //REMEMBER TO USE BACKWARD SINGLE QUOTES ` FOR src...
  //can use Math.random() to generate random numbers
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2> {monster.name} </h2>
    <p>{monster.email}</p>
  </div>
);
