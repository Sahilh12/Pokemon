import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const App = () => {
  const [pokemonApi, setpokemonApi] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const api = "https://pokeapi.co/api/v2/pokemon?limit=20";
  const [inputVal, setinputVal] = useState("");  

  const fetchPokemonApi = async () => {
    const response = await fetch(api);
    const data = await response.json(); 
    const originalData = data.results.map(async ({ url }) => {
      const res = await fetch(url);
      const realData = await res.json();
      return realData;
    });
    
    console.log(originalData);
    const pokemonData = await Promise.all(originalData);
    console.log(pokemonData);
    setpokemonApi(pokemonData);
    setisLoading(false);
  };

  useEffect(() => {
    fetchPokemonApi();
  }, []);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  
  const searchCard = pokemonApi.filter((currPokemonCard) => currPokemonCard.name.toLowerCase().includes(inputVal.toLowerCase()))

    return (
      <>
        <div className="text-center">
          <h1 className="heading">Lets Catch Pokemon</h1>
          <input className="searchBar" type="text" value={inputVal} onChange={(e) => setinputVal(e.target.value)} placeholder="Search pokemon" />
        </div>
        <div className="flex justify-around items-center flex-wrap gap-11">
          {searchCard.map((eachPokemon, i) => {
            return <PokemonCard key={i} data={eachPokemon} />;
          })}
        </div>
      </>
    );
   
};

export default App;
