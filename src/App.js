import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  //creating a new component that will change the original state
  constructor() {
    super();
    this.state = {
      //creating an array of monsters
      monsters: [],
      //create an empty string
      searchField: "",

      //example of a monster's array of JSON string objects
      /*monsters: [
       {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        } 
      ]*/
    };
    //identifying "this" when calling from the handleChange method
    //another way is using arrow function "=>"
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //fetches data from somewhere and do whatever we want
    fetch("https://jsonplaceholder.typicode.com/users") //fetching from this URL
      .then((response) => response.json()) //converting response into json format
      .then((users) => this.setState({ monsters: users })) //setting the values to our monsters
      .catch((error) => console.log("Some problem while fetching the URL"));
  }
  //when using arrow function "=>" it binds automatically, so "this" works
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; //short way to do the below example
    /* 
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */

    //create a new constant called filteredMonsters, which gets back a new array using the filter function with only the items which conditioning is true
    //includes function is a boolean that validates whatever parameter if exist in an certain array
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //keep listening to the components, if something changes, it renders the web application again
    //input of type search holds a search box, whereas the placeholder function allows to write a string that is hidden when a user prompts new input in the search box
    //e represents the sintatic event that receives the information, we update the state and re-render
    //if we wanna see or do something with the "state" right after we set it, it needs a call back as example: this.setState({ searchField: e.target.value }, () => console.log(this.state));
    //console.log in this case shows up in the developer tool on the webpage to see how things are working out
    return (
      <div className="App">
        <h1> Monsters Cards </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
