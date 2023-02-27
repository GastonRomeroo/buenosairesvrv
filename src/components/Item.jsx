import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark ">
            <img src={item.img} width={110} alt={item.titulo} />
            <p className="card-text">{item.titulo}</p>
            <p className="card-text">{item.slogan}</p>
        </Link>
    );
};

export default Item;