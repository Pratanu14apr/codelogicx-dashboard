import React from 'react'
import "./Services.css"
import ServiceIcon from "../../assets/carbon_service-id.png"
import Accordion from '../Accordion/Accordion.jsx'

function Services() {
  return (
    <section className='serviceSection'>
      <article className='serviceArticle'>
        <div className="serviceTitleContainer">
            <div className='textArea'>
              <p>service we offer</p>
            </div>
            <div className='iconContainer'>
              <img src={ServiceIcon} alt="icon" />
            </div>
        </div>
        <div className="detailsService">
        <Accordion/>
        </div>
      </article>
    </section>
  )
}

export default Services
