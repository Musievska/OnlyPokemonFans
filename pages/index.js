// import Layout from '../components/Layout/index';
//import { Loader } from '../components/Loader/index';
//import { Navbar } from '../components/Navbar/index';
import useFetchPokemon from '../hooks/useRequest';
import Pokemons from '../components/Pokemons/index';


export default function IndexPage() {
  const { result, error } = useFetchPokemon()

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return (
    <main className='App'>
      <h1>My pokemons</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemons pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </main>
  )

}
// export default function Home() {
//   return (
//     <>

//   </>
  
//   )
// }
