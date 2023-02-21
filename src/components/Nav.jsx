import React from "react";


const Nav = () => {
    return (
        <div className="row">
            <div className='col  '>
                <nav className="bg-dark navbar navbar-expand-lg bg-body-tertiary">
                    <div className=" container-fluid ">


                        <div className="row ">
                            <a className="navbar-brand" href="#">
                                <img src={"/img/LOGOS/3.jpeg"} alt={"logo"} width={80} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link  text-white" href="#">Residencial</a>
                                <a className="nav-link  text-white" href="#">Comercial</a>
                                <a className="nav-link  text-white" href="#">Servicios</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Nav