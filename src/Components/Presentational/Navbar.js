import React from 'react'
import SearchBar from './SearchBar'

export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <SearchBar changeSearch={props.changeSearch} />
            <img className="w-25"
            src="https://raw.githubusercontent.com/learn-co-curriculum/js-pokemon-search-practice-assignment/master/images/pokemon.png"
            alt=""/>
            <button onClick={props.showForm} class="btn btn-outline-success my-2 my-sm-0" >Add a pokemon</button>
        </nav>
    )
}
