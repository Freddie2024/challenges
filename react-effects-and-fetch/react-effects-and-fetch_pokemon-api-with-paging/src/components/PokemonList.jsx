import { useEffect, useState } from "react";
import "./PokemonList.css";


export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  // const ITEMS_PER_PAGE = 20;
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null); 

  // useEffect(() => {
    async function loadPokemon(url) {
      try {
        // const offset = (page - 1) * ITEMS_PER_PAGE;
        // const response = await fetch(
        //   `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`
        // );
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

  //   loadPokemon();
  // }, [page]);
  useEffect(() => {
    loadPokemon("https://pokeapi.co/api/v2/pokemon");
  }, []);

  function handleClickNextPage() {
    if (nextUrl) {
      loadPokemon(nextUrl);
    }
  }

  function handleClickPreviousPage() {
    if (prevUrl) {
      loadPokemon(prevUrl);
    }
  }

// function handleClickNextPage() {
// setPage(prevPage => prevPage  + 1)
// }

// function handleClickPreviousPage() {
//   setPage((prevPage) => Math.max(prevPage - 1, 1));
//   }

  return (
    <main>
      {/* <button onClick={handleClickPreviousPage} type="button" className="button">Previous Page</button> */}
      {prevUrl && (
        <button onClick={handleClickPreviousPage} type="button" className="button">
          Previous Page
        </button>
      )}
      <button onClick={handleClickNextPage} type="button" className="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">{name}</li>
        ))}
      </ul>
    </main>
  );
}
