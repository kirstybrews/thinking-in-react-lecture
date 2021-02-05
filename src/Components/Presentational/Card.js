import React from 'react'

const Card = ({ pokemon, clickAction }) => {
    return (
        <div onClick={() => clickAction(pokemon)} className="card m-3 w-25">
            <div className="card-body">
                <img className="card-img-top" src={pokemon.sprite} />
                <h5 className="card-title">{pokemon.name}</h5>
            </div>
        </div>
    )
}

export default Card