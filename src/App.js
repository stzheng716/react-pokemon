import React from 'react';
import Pokedex from './Pokedex'
import './App.css'

/** 
 * Displays all pokecards to our root on html 
 */

function App() {
    return (
        <div className = 'poke-container'>
            <Pokedex />
        </div>
    );
}

export default App;