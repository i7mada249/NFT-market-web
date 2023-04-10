import React from 'react'
import './comp.css'

const Categorie = ({ catImg, catName, author, authName, price, isPrice, bid, isBid }) => {
  return (
    <div className='cat-card scaleable'>
      <img src={catImg} alt="" />
      <div className="cat-cont">
        <h3>{catName}</h3>
        <div className='author'>
          <img src={author} alt="" />
          <p>{authName}</p>
        </div>
        <div className="cat-price">
          <div><p>{price}</p><h3>{isPrice}</h3></div>
          <div><p>{bid}</p><h3>{isBid}</h3></div>
        </div>
      </div>
    </div>
  )
}

export default Categorie