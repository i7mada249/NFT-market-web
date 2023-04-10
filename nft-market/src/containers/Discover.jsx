import React from 'react'
import "../components/comp.css"
import './Cont.css'
import Categorie from '../components/Categorie'
import {dis1, dis2, dis3, author} from '../assets/imports'

const Discover = () => {
    return (
        <div className='section'>
            <div className="headline">
                <div className="headline-content">
                    <h1>Discover More NFTs</h1>
                    <p>Explore new trending NFTs</p>
                </div>
                <button className='section-btn'>See All</button>
            </div>

            <div className="discover-cards">

                <Categorie catName='Distant Galaxy' 
                catImg={dis3} 
                author={author} 
                authName='MoonDancer'
                price='price' 
                isPrice='1.63 ETH' 
                bid='Highest Bid' 
                isBid='0.33 wETH' />

                <Categorie 
                catName='Life On Edena' 
                catImg={dis2} 
                author={author} 
                authName='NebulaKid' 
                price='price' 
                isPrice='1.63 ETH' 
                bid='Highest Bid' 
                isBid='0.33 wETH'/>
                
                <Categorie 
                catName='AstroFiction' 
                catImg={dis1} 
                author={author} 
                authName='Spaceone' 
                price='price' 
                isPrice='1.63 ETH'
                bid='Highest Bid' 
                isBid='0.33 wETH'/>

            </div>
        </div>
    )
}

export default Discover