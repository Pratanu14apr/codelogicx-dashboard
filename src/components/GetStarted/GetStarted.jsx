import React from 'react'
import './GetStarted.css'
import Logo from "./CodeLogo.png"
import VideoThumb from "./vidThumb.png"

function GetStarted() {
  return (
    <section className='outerContainer'>
        <article className='inner'>
            <div className="leftBlock">
               <img src={Logo} alt="codeLogo" />
               <p className='product'>Product Engineering </p>
               <div className='getStartedBtnBlock'>
                <button>Get Started</button>
                <p>company</p>
               </div>
            </div>
            <div className="rightBlock">
                <img src={VideoThumb} alt="video_thumbnail" width="260px" height="150px" />
            </div>
        </article>
    </section>
  )
}

export default GetStarted
