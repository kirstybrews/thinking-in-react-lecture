import React from 'react'

export const Card = ({ pokeData, handleAction }) => {
    return (
        <div onClick={() => handleAction(pokeData.id)} className="card m-3 w-25">
            <div className="card-body">
                <img className="card-img-top" src={pokeData.sprite} />
                <h5 className="card-title">{pokeData.name}</h5>
            </div>
            
        </div>
    )
}
