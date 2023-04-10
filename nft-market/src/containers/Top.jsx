import React from 'react'
import Creator from '../components/Creator'
import {
  top,
  top1,
  top2,
  top3,
  top4,
  top5,
  top6,
  top7,
  top8,
  top9,
  top10,
  top11,
} from '../assets/imports'

const Top = () => {
  return (
    <div className="section">
      <div className="headline">
        <div className="headline-content">
          <h1>Top creators</h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <button className='section-btn'>View Rankings</button>
      </div>
      <div className='top-creators'>
        <Creator rank='1' name='Keepitreal' photo={top} />
        <Creator rank='2' name='DigiLab' photo={top1} />
        <Creator rank='3' name='GravityOne' photo={top2} />
        <Creator rank='4' name='Juanie' photo={top3} />
        <Creator rank='5' name='BlueWhale' photo={top4} />
        <Creator rank='6' name='mr fox' photo={top5} />
        <Creator rank='7' name='Shroomie' photo={top6} />
        <Creator rank='8' name='robotica' photo={top7} />
        <Creator rank='9' name='RustyRobot' photo={top8} />
        <Creator rank='10' name='animakid' photo={top9} />
        <Creator rank='11' name='Dotgu' photo={top10} />
        <Creator rank='12' name='Ghiblier' photo={top11} />
      </div>
    </div>
  )
}

export default Top