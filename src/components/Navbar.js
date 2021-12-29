import React, { useState } from 'react'
import { Link , useHistory} from 'react-router-dom';
import './Navbar.css'



function Navbar() {
    const history=useHistory()
    return (

        <div className='header'>
            {/* <Link to='./'> */}
            <img onClick ={()=>{history.push('/')}}className='header__logo'
                src='https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png' />
            {/* </Link> */}



        </div>
    )
}


export default Navbar
