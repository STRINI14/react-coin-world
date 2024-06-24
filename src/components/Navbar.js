import React from 'react'
import { FaBitcoin } from "react-icons/fa";
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <h1> <span className='world'> Coin</span> World</h1>
                <FaBitcoin className='icon' />
            </div>
        </Link>
    )
}

export default Navbar