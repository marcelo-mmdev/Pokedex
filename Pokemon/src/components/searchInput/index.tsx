import { Box, Button, Input } from "@chakra-ui/react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { atomPokemon } from "../../api/recoil/atoms";
import { selectorGetPokemon } from "../../api/recoil/selectors";
import { useState } from "react";

const SearchInput = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);

  console.log(getLoadablePokemon?.contents);

  return (
    <>
      <Box display="flex">
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
        {getLoadablePokemon?.state === "loading" && <div>Loading ...</div>}
        {getLoadablePokemon?.state === "hasValue" &&
          getLoadablePokemon?.contents != undefined && (
            <div>
              <img
                src={getLoadablePokemon?.contents?.sprites?.front_default}
                alt={`${getLoadablePokemon?.contents?.name}`}
              />
            </div>
          )}
      </Box>
    </>
  );
};

export default SearchInput;
