import React from 'react'
import './cont.css'
import Categorie from '../components/Categorie'
import { cat, cat1, cat2, cat3, cat4, cat5, cat6, cat7 } from '../assets/imports'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="headline">
                <div className="headline-content">
                    <h1>Browse Categories</h1>
                </div>
            </div>

            <div className="cat-cards">
                <Categorie catName='Music' catImg={cat}/>
                <Categorie catName='Art' catImg={cat1}/>
                <Categorie catName='Collectibles' catImg={cat2}/>
                <Categorie catName='Photography' catImg={cat3}/>
                <Categorie catName='Utility' catImg={cat4}/>
                <Categorie catName='Video' catImg={cat5}/>
                <Categorie catName='Sport' catImg={cat6}/>
                <Categorie catName='Virtual Worlds' catImg={cat7}/>
            </div>
        </div>
    )
}

export default Categories