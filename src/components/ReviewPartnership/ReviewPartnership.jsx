import React from 'react'
import "./ReviewPartnership.css"
import Image1 from "../../assets/avatar1.png"
import Image2 from "../../assets/avatar2.png"
import Image3 from "../../assets/avatar3.png"
import BG1 from "../../assets/bg1.png"
import BG2 from "../../assets/bg2.png"
import Forbes from "../../assets/Forbes.png"
import Wall from "../../assets/wallStreet.png"
import TOI from "../../assets/TOI.png"
import BI from "../../assets/BI.png"
import TNW from "../../assets/TNW.png"
import Huff from "../../assets/HuffPost.png"




function ReviewPartnership() {
  return (
    <section className='myOuter'>
        <div className='reviewBlock'>
            <div className='avatarBlock'>
                <img src={Image1} alt=""  />
                <img src={Image2} alt=""  />
                <img src={Image3} alt=""  />
            </div>
            <div className='textContainer'>
                <p>Excellent 100+ Reviews</p>
            </div>
        </div>
        <article className='imageContainer'>
            <img src={BG1} alt="" />
            <img src={BG2} alt="" />
            <p>hello</p>
        </article>
        <div className='partners'>
            <div className="itemName border">
            <img src={Forbes} alt="" />
            </div>
            <div className="itemName border">
            <img src={Wall} alt="" />
            </div>
            <div className="itemName border">
            <img src={TOI} alt="" />
            </div>
            <div className="itemName border">
            <img src={BI} alt="" />
            </div>
            <div className="itemName border">
            <img src={TNW} alt="" />
            </div>
            <div className="itemName">
            <img src={Huff} alt="" />
            </div>
        </div>

    
    </section>
  )
}

export default ReviewPartnership
