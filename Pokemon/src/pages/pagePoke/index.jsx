import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const PagePoke = () => {
  const [pokemons, setPokemons] = useState([]);
  const getApiPoke = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then((response) => {
        setPokemons(response.data);
        console.log("Response do get", response.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getApiPoke();
  }, []);

  return (
    <>
      <Box>
        {pokemons.map((pokemon) => (
          <Text fontSize="12px" mt="8px" color="#000">
            {pokemon.results[0]}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default PagePoke;
