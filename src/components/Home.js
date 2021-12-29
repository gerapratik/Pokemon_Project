import React ,{useState, useEffect,}from 'react'
import PokemonList from "./PokemonList";
import axios from 'axios';
import Navbar from "./Navbar";
import Pagination from "./Pagination"

function Home() {
    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [nextPageUrl, setNextPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    // const [pokemonUrl, setPokemonUrl] = useState([])

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) })
            .then(r => {
                setLoading(false)
                setPrevPageUrl(r.data.previous)
                setNextPageUrl(r.data.next)
                setPokemon(r.data['results'])


                // setPokemon(r.data.results.map(p => p.name))
                // setPokemonUrl(r.data.results.map(p=>p.url))

            })
        return () => cancel()

    }, [currentPageUrl])

    const goToNextPage = () => {
        setCurrentPageUrl(nextPageUrl)

    }
    const goToPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    }




    if (loading) return 'Loading ...'
    return (
        <div>
            <>
      
      {/* <PokemonDetails open ={open} setOpen={setOpen} /> */}
      <PokemonList pokemon={pokemon}  />
      <Pagination
      goToNextPage={nextPageUrl ?goToNextPage: null}
      goToPrevPage={prevPageUrl ?goToPrevPage: null}
      />
    </>
        </div>
    )
}

export default Home
