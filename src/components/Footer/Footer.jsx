import React from 'react'
import "./Footer.css"
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import IndiaFlag from "../../assets/openmoji_flag-india.png"
import { IoIosSend } from "react-icons/io";


function Footer() {
  return (
   <section id="myFooter">
    <article className="footerContainer">
        <div className="leftArea">
            <div className='upper'>
                <p className='contactText'>Contact Information</p>
                <div className="addressArea">
                    <p className="addressText">address</p>
                    <div className='location'>
                        <img src={IndiaFlag} alt="" />
                        <p>6th floor, WEBEL IT PARK Tower II, BN-9, BN Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091</p>
                    </div>
                </div>
                <div className="emailPhone">
                    <div className="info">
                        <IoMdMail color='#FF7F50' size={24}/>
                        <div className="details">
                            <p className="heading">Email</p>
                            <a href="">hr@codelogicx.in</a>
                        </div>
                    </div>
                    <div className="info">
                        <IoCall color='#FF7F50' size={24}/>
                        <div className="details">
                            <p className="heading">Phone</p>
                            <ul>
                                <li>
                                    <a href="">+91-33-40054624</a>
                                    <a href="">+91-629 082 8707</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lower'>
                <input type="text" className="textInputBox"  placeholder='Your Name'/>
                <input type="text" className="textInputBox" placeholder='Your Email'/>
                <input type="text" className="textInputBox" placeholder='Contact No.' />
                <input type="text" className="textInputBox" placeholder='Comment'/>
                <button className='sendBtn'>
                    <span>Send</span>
                    <IoIosSend size={24} color='#ffffff'/>
                </button>
            </div>
        </div>
        <div className="rightArea">
                <div className="Block">
                   <div className='footerListItem'>
                    <p>About</p>
                    <ul>
                        <li>
                            <a href="">Our Story</a>
                            <a href="">Career</a>
                            <a href="">Life at Codelogicx</a>
                            <a href="">Blog</a>
                        </li>
                    </ul>
                   </div>
                   <div className='footerListItem'>
                   <p>Domains</p>
                    <ul>
                        <li>
                            <a href="">Fintech</a>
                            <a href="">Healthcare</a>
                            <a href="">Travel & Tourism</a>
                            <a href="">HR & Payroll</a>
                            <a href="">Manufacturing</a>
                        </li>
                    </ul>
                   </div>
                </div>
                <div className="Block">
                <div className='footerListItem'>
                    <p>Technologies</p>
                    <ul>
                        <li>
                            <a href="">Cloud</a>
                            <a href="">Native and hybrid mobile apps</a>
                            <a href="">Application backend</a>
                            <a href="">Blockchain</a>
                            <a href="">Machine learning and deep learning</a>
                            <a href="">DevOp</a>

                        </li>
                    </ul>
                   </div>
                   <div className='footerListItem'>
                   <p>Services</p>
                    <ul>
                        <li>
                            <a href="">Project management</a>
                            <a href="">Startup consulting</a>
                            <a href="">Application scaling</a>
                            <a href="">Cloud infrastructure</a>
                            <a href="">UI/UX development</a>
                            <a href="">Development Service</a>
                            <a href="">Quality engineering</a>
                        </li>
                    </ul>
                   </div >
                </div>
        </div>
    </article>
   </section>
  )
}

export default Footer
