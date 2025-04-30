import React, { useEffect, useRef } from 'react'
// import pdf from 'component/pdf'
import pdf from './pdf/Aman_SoftwareDeveloper.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'



function Home() {
   const typedRef = useRef(null);

   useEffect(()=>{
    const options ={
        strings:["Welcome to my profile. I am Software Developer at Bharti Airtel."],
        typeSpeed:50,
        backSpeed:50,
        loop:true
    }

    const typed = new Typed(typedRef.current, options)

    return () =>{
        typed.destroy()
    }

   },[])

    return (
        <div>
            <div className='container home ' id='home' >
            <div className='home'
            >
                <div className='left'>
                    <h1 ref={typedRef} >
                    {/* Software Developer (React JS) */}
                    </h1>
                    <a href={pdf} download="Aman_SoftwareDeveloper.pdf"
                        className='btn btn-outline-warning'> Download Resume </a>
                </div>
                <div className='right'> 
                <div className='img'  >
                    <img src={`/assets/${hero.imgSrc}`} alt='' />

                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Home