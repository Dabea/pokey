import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Pokemon extends Component {
   styles = {};
  render(){
   return( 
   <div className="pokemon">
      <h1>Pokemon:{this.props.pokemon.name}</h1>
      <h2>Type:{this.props.pokemon.type}</h2>
   </div>)
  }

}


class App extends Component {
  render() {
    
    const monster = [{name:'Bulbasaur', type:'Grass'}, {name:'Charmander', type:'Fire'}];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Poke-App</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="center">
          <Pokemon pokemon={monster[0]} />
          <Pokemon  pokemon={monster[1]} />
        </div>
       
      </div>
    );
  }
}

export default App;

