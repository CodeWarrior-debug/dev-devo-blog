import React from 'react'
import Link from "next/link"
import Button from "react-bootstrap/Button"

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-light" id="mainNav" >
            <div className="container px-4 px-lg-5">
              <Link className="navbar-brand scale" href="/"><p className='fs-1 scale'>Devo + Dev</p> </Link>
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                Menu

                </Button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="py-4 navbar-nav ms-auto py-lg-0">
                        <li className="nav-item scale"><Link className="py-3 nav-link px-lg-3 py-lg-4 fs-3" href="/compose">Compose</Link></li>
                        <li className="nav-item scale"><Link className="py-3 nav-link px-lg-3 py-lg-4 fs-3" href="/blogs">Posts</Link></li>
                        <li className="nav-item scale"><Link className="py-3 nav-link px-lg-3 py-lg-4 fs-3" href="/search">Search</Link></li>
                        <li className="nav-item scale"><Link className="py-3 nav-link px-lg-3 py-lg-4 fs-3" href="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
