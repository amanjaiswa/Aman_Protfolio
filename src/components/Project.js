import React from 'react'
import project from './data/projects.json'

function Project() {
    return (
        <>
            <div className='container projects my-3'  id='projects' >
                <h1> Personal Projects</h1>
                <div className='row d-flex justify-content-center align-content-center'>
                    {project.map((data, id) => (
                        <div key={id} className='my-3 col-sm-6 col-md-4  col-lg-3 mx-3 ' >
                            <div class="card bg-dark text-light " style={{ width: "18rem", border: "1px solid yellow", boxShadow: '5px 5px 10px 10px rgba(50, 199, 222, 0.5)' }}
                             data-aos ="flip-right"
                             data-aos-duration="1000"
                            >
                                <div className='img d-flex justify-content-center align-content-center p-3 ' >
                                <img src={`/assets/${data.imageSrc}`} alt='' 
                                    // {/* <img src={data.imageSrc} className="card-img-top" alt="..." */}
                                        style={{
                                           // width: '250px',
                                            height: '100px',
                                            borderRadius: '10px'
                                        }}
                                    />
                                </div>

                                <div className="card-body text-center ">
                                    <h5 className='card-title'> {data.title} </h5>
                                    <p className='card-text'> {data.description} </p>
                                    <a href={data.demo} className="btn btn-primary">Demo </a>
                                    <a href={data.source} className="btn btn-warning m-3"> Code</a>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Project