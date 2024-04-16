import React from 'react'
import "./Stats.css"

function Stats() {
  return (
    <section id='statsSection'>
      <article className='container'>
      <div className="stats borderRight">
            <p className='numbers'>7+</p>
            <p className='text'>Years in business</p>
          </div>
          <div className="stats borderRight">
            <p className='numbers'>140+</p>
            <p className='text'>Strong Team</p>
          </div>
          <div className="stats borderRight">
            <p className='numbers'>4</p>
            <p className='text'>Clients across continent</p>
          </div>
          <div className="stats borderRight">
            <p className='numbers'>1 million+</p>
            <p className='text'>People use our products daily</p>
          </div>
          <div className="stats borderRight">
            <p className='numbers'>90%</p>
            <p className='text'>Repeat clients</p>
          </div>
          <div className="stats">
            <p className='numbers'>6+</p>
            <p className='text'>Years longest relationship with client</p>
          </div>
          </article>
    </section>
  )
}

export default Stats
