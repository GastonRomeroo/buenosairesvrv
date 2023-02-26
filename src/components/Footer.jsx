import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1">
                        <ion-icon name="logo-google"></ion-icon>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </section>
                <section>
                    <div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4"> <ion-icon name="snow-outline"></ion-icon> Contacto <ion-icon name="snow-outline"></ion-icon></h6>
                            <p><i><ion-icon name="map-outline"></ion-icon> CABA, San Isidro, AR</i></p>
                            <p><i><ion-icon name="mail-outline"></ion-icon> bairesvrv@gmail.com</i></p>
                            <p><i><ion-icon name="call-outline"></ion-icon> + 54 9 11 3388 2244</i></p>
                            <p><i><ion-icon name="call-outline"></ion-icon> + 54 9 11 2255 5588</i></p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <p>© todos los derechos a buenosairesvrv</p>
                        <p> developers www.codecraze.com </p>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer