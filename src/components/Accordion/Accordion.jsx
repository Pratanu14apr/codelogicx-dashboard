import React, { useState } from 'react';
import './Accordion.css';
import ProDev from "../../assets/Images/PD.png"
import ProjMana from "../../assets/Images/ProjManagement.png"
import Startup from "../../assets/Images/startup.png"
import TechConsult from "../../assets/Images/TechConsult.png"
import AppScale from "../../assets/Images/appScaling.png"
import Cloud from "../../assets/Images/Cloud.png"
import UIDev from "../../assets/Images/UIDev.png"
import DevSer from "../../assets/Images/DevService.png"
import QA from "../../assets/Images/QA.png"

const dummyData = [
  {
    title: 'Product Development',
    imageUrl: ProDev,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Project Management',
    imageUrl: ProjMana,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Startup Consulting',
    imageUrl: Startup,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Technology Consulting',
    imageUrl: TechConsult,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Application Scaling',
    imageUrl: AppScale,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Cloud Infrastructure',
    imageUrl: Cloud,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'UI/UX Development',
    imageUrl: UIDev,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Development Service',
    imageUrl: DevSer,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  },
  {
    title: 'Quality Engineering',
    imageUrl: QA,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla ex eget magna fringilla suscipit. Nullam in massa in ex condimentum tempor. Donec id tincidunt elit. Aenean vitae gravida dolor. Proin sed consequat mi.'
  }
];

const Accordion = () => {

  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };


  return (
    <div className="accordion-container">
       <div className="accordion-titles">
        {dummyData.map((item, index) => (
          <div key={index}>
            <div
              className={`accordion-title ${activeAccordion === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title} <span className="accordion-toggle">{activeAccordion === index ? '-' : '+'}</span>
            </div>
            {activeAccordion === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="accordion-details">
        {activeAccordion !== null && (
          <div className="active-content">
            <h2>{dummyData[activeAccordion].title}</h2>
            <img src={dummyData[activeAccordion].imageUrl} alt={dummyData[activeAccordion].title} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

