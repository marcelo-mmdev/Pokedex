import type { NextPage } from "next";

import HomePokemons from "./homePokemons";
import Card from "../components/card";

const Home: NextPage = () => {
  return (
    <>
      <HomePokemons />
      {/* <Card /> */}
    </>
  );
};

export default Home;
