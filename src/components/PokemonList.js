import React, { useState } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import './PokemonList.css'
import PokemonDetails from './PokemonDetails'





function PokemonList({ pokemon}) {
    
   
    


    return (
        <div>

        {/* <PokemonDetails open ={open} setOpen={setOpen} /> */}
        <div className='container'>
            

            
                {pokemon.map(p => (
                    
                <PokemonCard key={p.name} name={p.name} url={p.url}   />
                    
                ))}
            </div>
            </div>
            

       
    )
   
}

export default PokemonList
