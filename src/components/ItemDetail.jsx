import React  from "react";


const ItemDetail = ({ item }) => {
    
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" width={80} alt={item.detalle}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.titulo}</h5>
                        <p className="card-text">{item.slogan}</p>
                        <p className="card-text">{item.detalle}</p>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default ItemDetail;