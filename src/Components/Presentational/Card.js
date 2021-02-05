import React from 'react'

const Card = (props) => {
    return (
        <div onClick={() => props.clickAction(props.pokemon)} className="card m-3 w-25">
            <div className="card-body">
                <img className="card-img-top" src={props.pokemon.sprite} />
                <h5 className="card-title">{props.pokemon.name}</h5>
            </div>
        </div>
    )
}

export default Card