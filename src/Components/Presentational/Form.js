import React, { Component } from 'react'

export default class Form extends Component {




    render() {
        return (
            <form onSubmit={(event) => this.submitForm(event)} class="m-3">
                <p class="text-light">Create a new Pokemon:</p>
                <div class="row">
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({name: event.target.value})} id="namevalue" name="pokeName" type="text" class="form-control" placeholder="Enter a Name"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({sprite: event.target.value})} name="pokeImg" type="text" class="form-control" placeholder="Enter an image URL"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({type: event.target.value})}  name="pokeType" type="text" class="form-control" placeholder="Enter a type"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({weight: event.target.value})}  name="pokeWeight" type="text" class="form-control" placeholder="Enter a weight"/>
                    </div>
                </div>
                <input class="btn btn-primary mt-2" id="submit" type="submit"/>
            </form>
        )
    }
}
