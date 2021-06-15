//this component only cares about displaying cards in some kind of configuration

import React from "react";
import {Card} from '../card/card.component';
import "./card-list.styles.css"; //using the css style to give the grid properties

export const CardList = (props) => {
  console.log(props);
  //return <div className='card-list'>{props.children}</div>;

  //collecting all items fetched from URL, transforming into monsters, giving style and setting as props
  return <div className="card-list">
    {props.monsters.map((monster) => ( //setting each item of the array "monsters" to be an unique monster
        //key is used to identify each monster. So then if something is updated, only that is updated
      <Card key={monster.id} monster={monster}/> //passing the monster into the Card component
    ))}
  </div>;
};
