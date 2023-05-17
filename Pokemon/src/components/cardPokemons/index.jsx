import {
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardPokemons = ({ name, imagem, types }) => {
  const typepoke = () => {
    if (types[1]) {
      return types[0].type.name + "  /  " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <>
      <LinkBox
        boxShadow="0 0 10px rgba(0,0,0,.15)"
        height="250"
        position="relative"
        p="10px 10px 10px 30px"
        css={{ "box-shadow": "0 0 10px rgba(0,0,0,.15)" }}
        bg="#000"
        borderRadius="20"
        _before={{
          top: "10px",
          left: "12px",
          position: "absolute",
          content: '" "',
          display: "block",
          width: "5px",
          height: "230px",
          background: "white",
          "border-radius": "5px",
        }}
      >
        <Box w="100%" h="45%" borderRadius="7px" border="1px solid #dfdfdf">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              height="100px"
              width="120px"
              src={imagem}
              alt="Image"
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
          </Box>
        </Box>
        <Box
          h="7%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="1%"
        >
          <Heading
            fontSize={{ base: "10px", md: "14px", lg: "16px" }}
            color="#FFF"
            as="h3"
          >
            <LinkOverlay href="/">{name}</LinkOverlay>
          </Heading>
        </Box>
        <Box h="47%" display="flex">
          <Box fontSize={{ base: "8px", md: "10px", lg: "12px" }} color="#FFF">
            <Box>
              <Text>Força:</Text>
            </Box>
            <Box>
              <Text>Ataque:</Text>
            </Box>
            <Box>
              <Text>Defesa:</Text>
            </Box>
            <Box>
              <Text>Agilidade:</Text>
            </Box>
          </Box>
          <Box fontSize={{ base: "8px", md: "10px", lg: "12px" }} color="#FFF">
            <Box>
              <Text>{typepoke()}</Text>
            </Box>
            <Box>
              <Text>{typepoke()}</Text>
            </Box>
          </Box>
        </Box>
      </LinkBox>
    </>
  );
};

export default CardPokemons;
