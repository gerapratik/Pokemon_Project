import React, { useState, useEffect } from 'react'
import './PokemonCard.css'
// import { Card, Image,Button, Icon, Header } from 'semantic-ui-react'
import PokemonDetails from './PokemonDetails';
import { Card,Modal,Image, Button, Header, Form , TextArea, } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';



function PokemonCard({name, url}) {

    // const [pokemonImage, setPokemonImage]=useState(null) 
    //    const [imageLoading, setImageLoading]=useState(false)
    
    const history =useHistory()
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imgUrl=`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
    
    // useEffect(()=>{
        
    //     axios.get(imgUrl)
    //     .then(r=>{
    //         setPokemonImage(r.data)
    //     })
    // })

    
    return (
        <div className='pokemon__card' >
            
      <Card >

            <div className="pokemon__name">
                <h3 className='name'> {name}</h3>
                
                
            </div>
            
            
            <img className='image'src={imgUrl} alt="" />
            
            <Button onClick={()=>history.push(`/pokemon/${pokemonIndex}`)}>Details</Button>
           
            
        </Card>
        {/* <PokemonDetails open ={open} setOpen={setOpen} /> */}
        {/* https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png */}
        
        </div>
        
    
    )}

export default PokemonCard



