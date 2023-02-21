import React from "react";

const Carrousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active">
                    <img src={"/img/carrousel/01.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/img/carrousel/02.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
                <div className="carousel-item">
                    <img src={"/img/carrousel/03.jpg"} className="d-block w-100" alt={"carousel"}></img>
                </div>
            </div>
        </div>
    );
};

export default Carrousel;