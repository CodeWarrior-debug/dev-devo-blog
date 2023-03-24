import React from 'react'

const Heading = () => {
  return (
    <>
      <header className="masthead " style={{backgroundImage: `url('/globe-networked.png')`, height:"100vw", backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
            <div className="container position-relative px-lg-5 " >
                <div className="row gx-4 gx-lg-5 ">
                    <div className="col-md-10 col-lg-8 col-xl-7 ">
                        <div className="site-heading  " style={{height:"500px"}}>
                            <h1 className="text-light ">A Repository Of Reflections</h1>
                            <span className="subheading text-light">Considering theology and tech, and sometimes the two together.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Heading
