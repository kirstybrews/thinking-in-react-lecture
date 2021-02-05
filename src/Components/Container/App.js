import React, { Component } from 'react'
//Components
import PokeContainer from './PokemonContainer'
import { Navbar } from '../Presentational/Navbar'
import TeamContainer from './TeamContainer'


export default class App extends Component {

 
  



  render() {

    return (
      <div className="bg-dark">
        <Navbar />
      

        <TeamContainer/>
        <div className="container">
          <PokeContainer/>
        </div>
      </div>
    )
  }
}

