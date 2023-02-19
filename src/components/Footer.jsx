import React from "react";

export default function Footer () {
    return (
        <footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section class="mb-4">
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f">
            </i> 
        </a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-twitter"></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-instagram"></i>
        </a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><i className="fab fa-linkedin-in"></i>
        </a>
    </section>
    <section>
        <div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
          <p><i className="fas fa-home me-3">CABA, San Isidro, AR</i></p>
          <p><i className="fas fa-envelope me-3">bairesvrv@gmail.com</i></p>
          <p><i className="fas fa-phone me-3">+ 01 234 567 88</i></p>
          <p><i className="fas fa-print me-3">+ 01 234 567 89</i></p>
        </div>
        </div>
    </section>
    <section>
        <div>
            <p>© todos los derechos a buenosairesvrv</p>
            <p> developers www.codecraze.com </p>
        </div>
    </section>
    {/* <section>
            <div className="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                © todos los derechos reservados a buenosairesvrv
            </div>
    </section> */}
    </div>
      </footer>
    )
}