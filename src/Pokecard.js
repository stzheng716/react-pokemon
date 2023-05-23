import React from 'react'
import './Pokecard.css'


/**
 * Takes in a object pokemon details 
 * 
 * return a card with details of pokemon 
 */
// coming from pokedex {id, name, type...}
// we have props = props:{ pokemon:{id, name, type...} }, 
// instead we could have line 14 on line 13
function Pokecard({pokemon}){
    const {id, name, type, base_experience} = pokemon
    const nameStyle = {
        color: 'blue',
    }

    return (
        <div className= 'pokecard'> 
            <h3 style={nameStyle}>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <div>
                <p>Type: {type}</p>    
                <p>EXP: {base_experience}</p>    
            </div>
        </div>
    )
}

export default Pokecard;