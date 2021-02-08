import React, {useState} from 'react'

const Card = (props) => {
    const [weight, setWeight] = useState(0)

    return (
        <div className="card m-3 w-25">
            <div className="card-body">
                <img className="card-img-top" src={props.pokemon.sprite} />
                <h5 className="card-title">{props.pokemon.name}</h5>
                <p>Weight: {props.pokemon.weight}</p>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.updateWeight(weight, props.pokemon)
                    e.target.reset()
                }}>
                    <label>
                        Update weight:
                        <input onChange={(e) => setWeight(e.target.value)} type="number"/>
                    </label>
                    <input type="submit"/>
                </form>
                <br></br>
                <button onClick={() =>  props.clickAction(props.pokemon)}>
                    {props.team.includes(props.pokemon) ? "Remove From Team" : "Add To Team"}
                </button>
                <button onClick={() => props.deletePoke(props.pokemon)}>Delete</button>
            </div>
        </div>
    )
}

export default Card