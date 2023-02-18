import React from "react";


const Nav = () => {
    return (
        <div className="row">
            <div className='col'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className=" container-fluid">
                        <div className="row">
                            <a className="navbar-brand" href="#">LOGO</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="#">Residencial</a>
                                <a className="nav-link" href="#">Comercial</a>
                                <a className="nav-link" href="#">Servicios</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Nav