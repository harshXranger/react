import React from 'react'
import { Link } from 'react-router-dom'
const Top = () => {
    return (
        <div>
            <div class='Navbar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/aboutus'}>About Us</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/product'}>Product</Link>
            </div>
        </div>

    )
}

export default Top
