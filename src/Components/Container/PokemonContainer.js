import React, { Component } from 'react'
import Card  from '../Presentational/Card'

export default class PokemonContainer extends Component {
    render() {
        return (
            <div className="row justify-content-center">
               {this.props.pokemon.map(
                   (pokemon) => <Card clickAction={this.props.addToTeam} pokemon={pokemon}/>
               )}
            </div>
        )
    }
}
