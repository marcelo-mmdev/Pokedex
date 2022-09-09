import { Box, Container, Image, Heading, Select, SimpleGrid, Text, LinkBox, LinkOverlay, Flex, Input } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardPokemons from '../cardPokemons'


const Conteiner = () => {
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
      <Box  padding="50px 0" bg={'#F3F7FC'} border={'solid #D9E6EC'} borderWidth="1px 0">
        <Container position="relative" maxW={'1200px'}>
          <Box w="100%" float="left" position="relative" _before={{ position: 'absolute', content: '" "', display: 'block', width: '5px', height: '100%', background: '#272B44', 'border-radius': '5px' }}>
            <Image float="left" src='./download.png' alt='Super Ofertas' w={'65px'} h={'50px'}  margin="0 10px 0 20px" />
            <Heading as="h2" color={'#272B44'} fontSize={{ base: '22px', md: '24px', lg: '26px',}}
            >Pokemons</Heading>
            <Heading as="h3" color={'#16428E'} p={'0px'} fontSize={{ base: '14px', md: '16px', lg: '18px',}}
             >1 Temporada</Heading>
          </Box>

          <Box position="absolute" textTransform={'uppercase'} top="0" right="16px">
            <Input onChange={(e) => filtraPokemon(e.target.value)} variant='flushed' placeholder='Pesquisar Pokémon' fontSize={{ base: '10px', md: '12px', lg: '24px', }} />
          </Box>
         
          <Box sx={{ clear: 'both' }} mb={'53px'}></Box>

          <SimpleGrid columns="3" gap="25px" textTransform={'uppercase'}>
            {pokemons.map((pokemon) => (
                <CardPokemons name={pokemon.data.name} imagem={pokemon.data.sprites.front_default} types={pokemon.data.types}/>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
}

export default Conteiner 