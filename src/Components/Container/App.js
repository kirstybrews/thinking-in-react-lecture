import React, { Component } from 'react'
//Components
import PokeContainer from './PokemonContainer'
import { Navbar } from '../Presentational/Navbar'
import TeamContainer from './TeamContainer'
import Form from '../Presentational/Form'

//Fetch pokemon data, and render a Card for each pokemon, inside
// the PokeContainer 

// When I click on a pokemon inside Pokemon container, That pokemon appears
// inside TeamContainer

// When click on a pokemon inside TeamContainer, it gets removed from the team

export default class App extends Component {
  
  state = {
    pokemon: [],
    team: [],
    showForm: false,
    searchText: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokeData => this.setState({pokemon: pokeData}))
  }
  
  // async componentDidMount() {
  //   const res = await fetch("http://localhost:3000/pokemon")
  //   const pokemon = await res.json()
  //   this.setState({pokemon})
  // }

  changeSearch = (text) => {
    this.setState({searchText: text})
  }

  addToTeam = (pokemon) => {
    if(!this.state.team.includes(pokemon)){
      this.setState({team: [...this.state.team, pokemon]})
    }
  }

  removeFromTeam = (pokemon) => {
    let newTeam = this.state.team.filter(pokes => pokes.id !== pokemon.id)
    this.setState({
      team: newTeam
    })
  }

  showForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

  addNewPokemon = (newPokemon) => {
    this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
    return (
      <div className="bg-dark">
        <Navbar changeSearch={this.changeSearch} showForm={this.showForm} />
        {this.state.showForm ? <Form addNewPoke={this.addNewPokemon} /> : null}
        <TeamContainer removeFromTeam={this.removeFromTeam} team={this.state.team}/>
        <div className="container">
          <PokeContainer addToTeam={this.addToTeam} pokemon={filteredPokemon}/>
        </div>
      </div>
    )
  }
}

