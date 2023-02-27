import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ResidencialJson from "./json/residencial.json"
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ResidencialJson.find(item => item.id === parseInt(id)));
            }, 900)
        });
        promesa.then((data) => {
            setItem(data);
        });
    }, [id]);
    return (
        <div>
            <div className="container">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;