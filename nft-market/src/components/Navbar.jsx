import React from 'react'
import './Comp.css'

const Navbar = () => {
    return (
        <div className="nav-cont">
            <div className='navbar'>
                <h3 className="logo">NFT Market</h3>
                <nav className="nav-list">
                    <a href="">Marketplace</a>
                    <a href="">Rankings</a>
                    <a href="">Connect a wallet</a>
                    <button className="nav-btn">sign up</button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar