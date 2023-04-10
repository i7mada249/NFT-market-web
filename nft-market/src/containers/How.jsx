import React from 'react'
import HowCards from '../components/HowCards'
import { how, how1, how2 } from '../assets/imports'

const How = () => {
    return (
        <div className='section'>

            <div className="headline">
                <div className="headline-content">
                    <h1>How it works</h1>
                    <p>Find out how to get started</p>
                </div>
            </div>

            <div className="howpage">

                <HowCards howImg={how}
                    headline='Start Earning'
                    caption='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
                />

                <HowCards howImg={how1}
                    headline='Create Collection'
                    caption='Upload your work and setup your collection. Add a description, social links and floor price.'
                />

                <HowCards howImg={how2}
                    headline='Setup Your wallet'
                    caption='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'

                />

            </div>
        </div>
    )
}

export default How