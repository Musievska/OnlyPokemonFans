//creating custom hook based on swr

import useSWR from 'swr';

const fetcher = (url) =>
    fetch(url)
        .then((response) => response.json());

const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const PAGE_LIMIT = 50;

export default function useFetchPokemon(name) {
    const uri = name ?
        `${API_URL}/${name}` :
        `${API_URL}?limit= ${PAGE_LIMIT}`;

const { data: result, error } = useSWR(uri, fetcher)

return { result, error }
}