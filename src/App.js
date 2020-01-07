import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.components";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props){
    super(props);

  this.state = {
       monsters: [],
       search:''
   }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
  }

  handleChange = (e,stateField) => {
  this.setState({[stateField]:e.target.value})};


  render(){
  const {monsters, search} = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search));
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={(e) => this.handleChange(e,'search')}/>
      <CardList monsters={filteredMonsters}/>
    </div>
   );
  }
}

export default App;
