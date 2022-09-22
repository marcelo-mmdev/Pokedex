import React from 'react'
import { Box } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardPokemons from '../template/cardPokemons'

const API = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        const endpoints = [];
        for (let i = 1; i < 152; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const response = axios.all(endpoints.map((endpoints) => 
        axios.get(endpoints))).then((res) => setPokemons(res))

        // axios
        // .get("https://pokeapi.co/api/v2/pokemon?limit=10")
        // .then((res) => setPokemons(res.data.results))
        // .catch((err) => console.log(err))
    }

    const filtraPokemon = (name) => {
        const filtro = [];
        if(name === ""){
            getPokemons()
        }
        for (let i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filtro.push(pokemons[i])
            }
        }
        setPokemons(filtro);
    }

  return (
    <>
        {pokemons.map((pokemon) => (
            <CardPokemons
                id={pokemon.data.id} 
                name={pokemon.data.name} 
                types={pokemon.data.types}
                imagem={pokemon.data.sprites.front_default}
                agil={pokemon.data.stats} 
            />
        ))}
    </>
  )
}

export default API