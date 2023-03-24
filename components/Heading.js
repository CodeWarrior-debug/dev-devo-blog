import React from 'react'

const Heading = () => {
  return (
    <>
      <header className="masthead" style={{backgroundImage: `url('/home-bg.jpg')`}}>
            <div className="container px-4 position-relative px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1 className="text-light">A Repository Of Reflections</h1>
                            <span className="subheading text-light">Considering theology, considering tech, and sometimes considering them together.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Heading
