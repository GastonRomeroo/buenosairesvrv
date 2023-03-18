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


/*
IDEA DE CHAT GPT

import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/ruta-al-archivo-json");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{data.titulo}</h1>
      <p>{data.slogan}</p>
      <img src={data.img} alt="Imagen principal" />
      {data.img1.map((img, index) => (
        <img key={index} src={img.img} alt={`Imagen ${index}`} />
      ))}
      {data.detalle.map((detalle, index) => (
        <div key={index}>
          {detalle.detalle.map((item, index) => (
            <div key={index}>
              {item.name && <p>{item.name}</p>}
              {item.img && <img src={item.img} alt={`Imagen ${index}`} />}
              {item.catalogo && (
                <a href={item.catalogo} target="_blank" rel="noreferrer">
                  Catálogo
                </a>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
*/