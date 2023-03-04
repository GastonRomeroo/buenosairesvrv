import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ResidencialJson from "./json/residencial.json";
import Loading from "./loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    


    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ResidencialJson.find(item => item.id === id));
            }, 900)
        });
        promesa.then((data) => {
            setItem(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <div>
            <div className="container">
                {loading ? <Loading /> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;