import React from 'react'

import { Link, useLocation} from 'react-router-dom'

export default function Navbar(){
const location=useLocation()
const {pathname}=location
const splitLocation = pathname.split("/");
  return (
    <div>
        <nav className="navbar navbar-expand-md bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className={splitLocation[1] === "upload" ?" nav-link active":" nav-link"} to="/upload">Upload</Link>
        </li>
        <li className="nav-item">
          <Link className={splitLocation[1] === "myimages" ?" nav-link active":" nav-link"} aria-current="page" to="/myimages">My Images</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
}
