import React from 'react'

const Creator = ({ rank, photo, name }) => {
    return (
        <div className='creator-card'>
            <div className="rank-bg"><p className='rank'>{rank}</p></div>
            
            <div className="card-content">
                <div className="creator">
                    <img src={photo} alt="" />
                    <h3>{name}</h3>
                    <div className="sales"><p>total sales: </p><h4>43 ETH</h4></div>
                </div>
            </div>
        </div>
    )
}

export default Creator