import { Box, Button, Image, Input } from "@chakra-ui/react";
import Card from "../../components/card";
import SearchInput from "../../components/searchInput";
import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { atomPokemon } from "../../api/recoil/atoms";
import { selectorGetPokemon } from "../../api/recoil/selectors";

const HomePokemons = () => {
  const [searchPokemon, setSearchPokemon] = useState({});
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
  console.log(getLoadablePokemon);
  return (
    <>
      <Box h="100vh">
        <Box
          w={"100%"}
          mt="5%"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="block" justifyContent="center" alignItems="center">
            <Box>
              <Image
                src="./logo-pokedex.png"
                alt="home"
                w={"280px"}
                h={"120px"}
              />
            </Box>
            <Box display={"flex"}>
              <Input
                type="text"
                onChange={(event) => setSearchPokemon(event.target.value)}
              />
              <Button
                bg="red"
                textColor="#FFF"
                onClick={() => setPokemon(searchPokemon)}
              >
                Search
              </Button>
              {/* {getLoadablePokemon?.state === "loading" && (
                  <div>Loading ...</div>
                )} */}
            </Box>

            <Box>
              <Card
                image={
                  getLoadablePokemon?.contents?.sprites?.other?.dream_world
                    ?.front_default
                }
                name={getLoadablePokemon?.contents?.name}
                exp={getLoadablePokemon?.contents?.base_experience}
                ids={getLoadablePokemon?.contents?.id}
                tipos={getLoadablePokemon?.contents?.types[0]}
              />
            </Box>
          </Box>
        </Box>

        <Image src="./homeFull.png" alt="home" w={"100%"} h={"100%"} />
      </Box>
    </>
  );
};

export default HomePokemons;
