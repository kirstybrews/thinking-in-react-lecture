import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        pokeName: "",
        pokeImg: "",
        pokeType: "",
        pokeWeight: ""
    }

    handleSubmit(e){
        e.preventDefault()
        let newPokemon = {
            name:  this.state.pokeName,
            sprite: this.state.pokeImg,
            type: this.state.pokeType,
            weight: this.state.pokeWeight
        }

        let reqObj = {}
            reqObj.headers = {"Content-Type": "application/json"}
            reqObj.method = "POST"
            reqObj.body = JSON.stringify(newPokemon)

        fetch('http://localhost:3000/pokemon', reqObj)
            .then(r => r.json())
            .then(newPokemon => {
                this.props.addNewPoke(newPokemon)
                e.target.reset()
            })
        
    }


    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} class="m-3">
                <p class="text-light">Create a new Pokemon:</p>
                <div class="row">
                    <div class="col-sm">
                        <input onChange={(e) => this.setState({pokeName: e.target.value})} id="namevalue" name="pokeName" type="text" class="form-control" placeholder="Enter a Name"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(e) => this.setState({pokeImg: e.target.value})} name="pokeImg" type="text" class="form-control" placeholder="Enter an image URL"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(e) => this.setState({pokeType: e.target.value})} name="pokeType" type="text" class="form-control" placeholder="Enter a type"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(e) => this.setState({pokeWeight: e.target.value})} name="pokeWeight" type="text" class="form-control" placeholder="Enter a weight"/>
                    </div>
                </div>
                <input class="btn btn-primary mt-2" id="submit" type="submit"/>
            </form>
        )
    }
}
