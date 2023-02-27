import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ArraydeProductos from "./json/residencial.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? ArraydeProductos.filter(item => item.cat === id) : ArraydeProductos);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id])


    return (
        <div className="container py-3">
            <ItemList items={items} />
        </div>
    )
};

export default ItemListContainer