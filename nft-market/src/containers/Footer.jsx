import React from 'react'
import logo from '../assets/logo.png'
import './Cont.css'

const Footer = () => {
    return (
        <div className='footer-cont'>
            <div className='footer'>
                <div className="footer-links">
                    <li>
                        <img src={logo} alt="" className='footer-logo'/>
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <div>
                            <p>Join our community</p>
                            <div className='icons'>
                                <i class="fa-brands fa-github"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-solid fa-basketball"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3>Explore</h3>
                        <a href="">Marketplace</a>
                        <a href="">Rankings</a>
                        <a href="">Connect a wallet</a>
                    </li>
                    <li>
                        <h3>Join our weekly digest</h3>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className="subscribe2">
                            <input type="email" placeholder='Enter your email here' />
                            <button>Subscribe</button>
                        </div>
                    </li>
                </div>

                <div className="footer-rights">

                </div>
            </div>
        </div>
    )
}

export default Footer