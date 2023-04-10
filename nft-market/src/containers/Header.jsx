import React from 'react'
import './Cont.css'
import img from '../assets/main.png'
import author from '../assets/author.png'


const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h1>Discover digital art & Collect NFTs</h1>
            <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
            <button className='header-btn'>Get started</button>
            <div className="header-nums">
                <div><h3>240k+</h3><p>Total Sale</p></div>
                <div><h3>100k+ </h3><p>Auctions</p></div>
                <div><h3>240k+</h3><p>Artists</p></div>
            </div>
        </div>
        <div className="header-img scaleable">
            <img src={img} alt="" className='main-img'/>
            <div className='header-card'>
                <h3>Space Walking</h3>
                <div className='author'>
                    <img src={author} alt="" />
                    <p>Animakid</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header