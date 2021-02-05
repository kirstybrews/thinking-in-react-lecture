import React, { Component } from 'react'
import Card from '../Presentational/Card'

export default class TeamContainer extends Component {
    render() {
        return (
            <div className="border border-warning bg-grey container mt-2 p-3">
                <h3 className="text-center text-light"> My team</h3>
                <div className="row justify-content-center">
                    <div className="card-deck">
                        {this.props.team.map(
                            pokemon => <Card clickAction={this.props.removeFromTeam} pokemon={pokemon} />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
