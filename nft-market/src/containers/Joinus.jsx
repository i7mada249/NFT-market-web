import React from 'react'
import joinImg from '../assets/join.png'

const Joinus = () => {
    return (
        <div className='section'>
            <div className="join-cont">
                <img src={joinImg} alt="" />
                <div className="join-content">
                    <div className="join-txt">
                        <h1>Join our weekly digest</h1>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                    </div>
                    <div className="subscribe">
                        <input type="email" placeholder='Enter your email here' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Joinus