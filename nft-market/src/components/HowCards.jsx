import React from 'react'

const HowCards = ( { howImg, headline, caption } ) => {
  return (
    <div className='how-card scaleable'>
        <img src={howImg} alt="" />
        <h2>{headline}</h2>
        <p>{caption}</p>
    </div>
  )
}

export default HowCards