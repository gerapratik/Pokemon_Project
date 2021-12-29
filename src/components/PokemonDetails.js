import React, { useEffect, useState } from 'react'
// import {useLocation}
import axios from 'axios'
import { Progress } from 'semantic-ui-react'
import './PokemonDetails.css'
import { Image ,Card} from 'semantic-ui-react'


function PokemonDetails(props) {
    const [details, setDetails] = useState(null)
    const id = props.match.params.id
    // const pokemonIndex = url.split('/')[url.split('/').length - 2];

    const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`
    const getProgress = (stats, value) => {
        return (
            <div className='progress__container grid-col-span-2'>
                <div> {stats}</div>

                <Progress percent={value} color='blue' value={value} />


            </div>
        )
    }




    useEffect(() => {
        const id = props.match.params.id
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(r => {
                setDetails(r.data)
                console.log(r.data)

            })
    }, [])
    if (details == null) {
        return <div>
            Loading details
        </div>
    }
    return (
        <div className="details__container">
            <Card >

                <div className="pokemon__name">
                    <h3 className='name'> {details.name}</h3>


                </div>


                <img className='image' src={imgUrl} alt="Image" />

                

            </Card>

            {/* <div className="img__name">
                <span className="pokemon__name">{details.name}</span>
                <img class="pokemon__image" src={imgUrl} alt="Image" />
                {/* <Image size='large' className='image' src={imgUrl} wrapped /> */}
            {/* </div> */} 
            <div className='pokemon__stats grid-col-span-2'>
                {details.stats.map(stat => {
                    return getProgress(stat.stat.name, stat.base_stat)
                })}
            </div>


        </div>
    )
}

export default PokemonDetails
