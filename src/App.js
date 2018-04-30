import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Pokemon extends Component {
  
  render(){
    this.state = {
      name: this.props.pokemon.name,
      type: this.props.pokemon.type,
      level:this.props.pokemon.level
    }

     const level= () => {
      
    }
   return( 
   <div className="pokemon" onClick={this.props.test}>
      <h1>Pokemon:{this.state.name}</h1>
      <h2>Type:{this.state.type}</h2>
      <h2>Level:{this.state.level}</h2>
   </div>)
  }

}


class App extends Component {
  render() {
   
   
    const monster = [{name:'Bulbasaur', type:'Grass', level:1}, {name:'Charmander', type:'Fire', level:2}];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Poke-App</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="center">
          <Pokemon pokemon={monster[0] }  />
          <Pokemon  pokemon={monster[1]} />
        </div>
       
      </div>
    );
  }
}

export default App;

