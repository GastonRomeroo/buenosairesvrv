import React from "react";
import { Link } from "react-router-dom";

const Item = ( {item} ) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card border border-0">
                <img src={item.img} width={200} alt={item.titulo} />
                <div className="card-body text-center">
                    <p className="card-text">{item.titulo}</p>
                    <p className="card-text">{item.slogan}</p>
                </div>
            </div>
        </Link>
    );
};

export default Item;