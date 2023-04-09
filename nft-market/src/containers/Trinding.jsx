import React from 'react'
import '../assets/imports'
import author from '../assets/author.png'
import {
  img1,
  img2,
  img3,

  img01,
  img001,
  img02,
  img002,
  img03,
  img003,
} from '../assets/imports'

const Trinding = () => {
  return (
    <div className='trinding'>

      <div className='trend-typo'>
        <h2></h2>
        <p></p>
      </div>

      <div className="gallery">

        <div className="trend">
          <img src={img1} alt="" />
          <div className="more-imgs">
            <img src={img01} alt="" />
            <img src={img001} alt="" />
            <button>+1022</button>
          </div>
          <div className="about-gallery">
            <h3>Disco Machines</h3>
            <div className="author">
              <img src={author} alt="" />
              <p>Animakid</p>
            </div>
          </div>
        </div>

        <div className="trend">
          <img src={img2} alt="" />
          <div className="more-imgs">
            <img src={img02} alt="" />
            <img src={img002} alt="" />
            <button>+1022</button>
          </div>
          <div className="about-gallery">
            <h3>Magic Mushrooms</h3>
            <div className="author">
              <img src={author} alt="" />
              <p>Animakid</p>
            </div>
          </div>
        </div>

        <div className="trend">
          <img src={img3} alt="" />
          <div className="more-imgs">
            <img src={img03} alt="" />
            <img src={img003} alt="" />
            <button>+1022</button>
          </div>
          <div className="about-gallery">
            <h3>DSGN Animals</h3>
            <div className="author">
              <img src={author} alt="" />
              <p>Animakid</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Trinding