import React, { Component } from 'react'
import pokemons from '../pokemons'
import Pokemon from './Pokemon'


class Pokedex extends Component {
    render () {
        return (
            pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id}/>)
        )
    }
}

export default Pokedex