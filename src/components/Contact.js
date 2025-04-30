import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <>
    <div className='container contact' id='contact' > 
    <h1>CONTACT ME</h1>
       <div className='contact-icon'
        data-aos ="zoom-in-up"
        data-aos-duration="1000"
        >
       <a href="https://www.linkedin.com/in/amanjaiswal0502/" target='blank' className='items' >
        <FaLinkedin className='icons' />
      </a>
       <a href="https://github.com/amanjaiswa" target='blank' className='items' >
        <FaGithub className='icons'/>
      </a>
       
       <a href="mailto:aman.ind1234@gmail.com" target='blank' className='items' >
        <IoIosMail className='icons' />
      </a>
      

      </div>
    </div>

    </>
  )
}

export default Contact