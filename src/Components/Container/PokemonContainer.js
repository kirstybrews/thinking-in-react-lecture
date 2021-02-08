import React, { Component } from 'react'
import Card  from '../Presentational/Card'

export default class PokemonContainer extends Component {
    render() {
        return (
            <div className="row justify-content-center">
               {this.props.pokemon.map(
                   (pokemon) => <Card updateWeight={this.props.updateWeight} team={this.props.team} clickAction={this.props.addToTeam} deletePoke={this.props.deletePoke} pokemon={pokemon}/>
               )}
            </div>
        )
    }
}
