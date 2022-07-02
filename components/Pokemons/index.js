import React from 'react';
import useFetchPokemon from '../../hooks/useRequest';

export default function Pokemon({ pokemon }) {
    const { name } = pokemon;
    const { result, error } = useFetchPokemon(name);

    if (error) {
        return <h1>
            Something went wrong
        </h1>
    }

    if (!result) {
        return <h1>
            Loading
        </h1>
    }

    return (
        <div>
            {result.id}
        </div>
    )
}