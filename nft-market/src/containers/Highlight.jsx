import React from 'react'
import './Cont.css'
import HighlightImg from '../assets/highlight.png'
import { author } from '../assets/imports'
import Timer from '../components/Timer'

const Highlight = () => {
  return (
    <div className='nft-highlight section'>
        <div className='leftside'>
            <div className="author2 scaleable">
                <img src={author} alt="" />
                <p>shroomie</p>
            </div>
            <h1>Magic Mashrooms</h1>
            <button>See NFT</button>
        </div>
        <div className="timer">
            <p>Auction ends in:</p>
            <div className='time'>
                <h1>59</h1><h1>:</h1><h1>59</h1><h1>:</h1><h1>59</h1>
            </div>
            <div className='time2'>
                <p>Hours</p>
                <p>Minuts</p>
                <p>Seconds</p>
            </div>
        </div>
    </div>
  )
}

export default Highlight