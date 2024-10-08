import { useEffect, useState } from "react";
import "./PokemonList.css";


export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const offset = (page - 1) * ITEMS_PER_PAGE;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

function handleClickNextPage() {
setPage(prevPage => prevPage  + 1)
}

function handleClickPreviousPage() {
  setPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  return (
    <main>
      <button onClick={handleClickPreviousPage} type="button" className="button">Previous Page</button>
      <button onClick={handleClickNextPage} type="button" className="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">{name}</li>
        ))}
      </ul>
    </main>
  );
}
