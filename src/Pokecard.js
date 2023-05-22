function Pokecard({id, name, type, base_experience}){
    return (
        <div> 
            <h3>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <div>
                <p>Type: {type}</p>    
                <p>EXP: {base_experience}</p>    
            </div>
        </div>
    )
}

export default Pokecard