import React from 'react'
import "./journey.css"
import GrowArrow from "../../assets/fluent_arrow-growth-24-filled.png"
import Step from "../../assets/step.png"

function journey() {
  return (
    <section id='journeySection'>
      <article className='container'>
          <div className='titleBlock'>
              <div className='iconBlock'>
                <img src={GrowArrow} alt="" />
              </div>
              <div className='textBlock'>
                <p>Journey of our Growth</p>
              </div>
          </div>
          <div className='photoContainer'>
            <img src={Step} alt="" />
          </div>
      </article>
    </section>
  )
}

export default journey
