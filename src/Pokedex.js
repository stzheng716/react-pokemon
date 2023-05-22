import Pokecard from "./Pokecard"

function Pokedex(pokemons){
    for(let pokemon of pokemons){
        <Pokecard pokemon={pokemon}/>
    }
}

export default Pokedex