import React from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start"   alt={item.detalle} />
                    
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.slogan}</p>
                        <ul>
                            {item.detalle && item.detalle.map(item => (
                                <li key={item.name}>{item.name}</li>
                                ))}
                        </ul>
                        <Link className="card-text" src={item.catalogo}>Descargar Catalogo</Link>

                    </div>
                </div>
            </div>
        </div>

    )
};
export default ItemDetail;