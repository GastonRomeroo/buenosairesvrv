import React from "react";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="row">
            <div className='col '>
                <nav className="bg-dark navbar navbar-expand-lg bg-body-tertiary">
                    <div className=" container-fluid ">
                        <div className="row " >
                            <Link className="navbar-brand" to={"/"}>
                                <img src={"/img/LOGOS/001.png"} alt={"logo"} width={60} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <NavLink className="nav-item nav-link text-white" to={"/category/residencial"}>Residencial</NavLink>
                                <NavLink className="nav-item nav-link text-white" to={"/category/comercial"}>Comercial</NavLink>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
)
}

export default NavBar
                    