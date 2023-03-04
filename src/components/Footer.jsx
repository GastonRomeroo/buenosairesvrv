import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-dark text-center text-white">
            <div className="container p-4">
                <div className="mb-4">
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-whatsapp"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-twitter"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-google"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-instagram"></ion-icon></Link>
                    <Link className="btn btn-outline-light btn-floating m-1"><ion-icon name="logo-linkedin"></ion-icon></Link>
                </div>
                <div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4"> <ion-icon name="snow-outline"></ion-icon> Contacto <ion-icon name="snow-outline"></ion-icon></h6>
                        <p><i><ion-icon name="map-outline"></ion-icon> CABA, San Isidro, AR</i></p>
                        <p><i><ion-icon name="mail-outline"></ion-icon> bairesvrv@gmail.com</i></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>© todos los derechos a buenosairesvrv</p>
                        <p> developers www.codecraze.com </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer