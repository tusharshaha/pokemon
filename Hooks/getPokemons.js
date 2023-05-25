import { useState, useEffect } from "react";
import request from "graphql-request";
import { pokemon_query } from "graphql/query";
import { GRAPHQL_URL } from "utils/base_url";


export const getPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        request(GRAPHQL_URL, pokemon_query)
            .then(data => setPokemons(data.pokemons.results))
    }, [])
    return { pokemons };
};
