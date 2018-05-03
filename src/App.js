import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Pokemon extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: this.props.pokemon.name,
        type: this.props.pokemon.type,
        level:this.props.pokemon.level
      };
      
    }
    componentDidMount() {
      this.getPokemonInfo();
    }

    calculateGainedExp(opponet){
      //Opponet Base EXP for pokemon type * opponet Level * (1.0 if wild || 1.5 if trainerballte) / 7 (Split between Number of pokemon in the battle)
      opponet.level
      opponet.baseExp
    }

    getPokemonInfo = function(pokemon){
      console.log('get Pokemon Data');
      fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(response => response.json() )
        .then((json) => {
          this.setState({name: json.name});  
        })
    } 
    
  render(){ 
    
   
    
    const shouldEvlove = (level) => { 
      if(level === 16){
        let message = `${this.state.name} Is trying to evlove`;
        alert(message);
      }
    };

     const levelUp= () => {
      this.setState({level: this.state.level + 1});
      shouldEvlove(this.state.level);
    }

   return( 
   <div className="pokemon" onClick={levelUp}>
    <img src={this.pros} className="App-logo" alt="logo" />
      <h1>Pokemon:{this.state.name}</h1>
      <h2>Type:{this.state.type}</h2>
      <h2>Level:{this.state.level}</h2>
      {/* sprite
name
weight   // height
type1
type2
heldItmes
Ev value
baseExp
exp
level
battleexp Wild:xx  Trainer:xx */}
   </div>)
  }

}

const monster = [{name:'Bulbasaur', type:'Grass', level:1}, {name:'Charmander', type:'Fire', level:2}];

class App extends Component {
  render() {
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

