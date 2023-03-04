import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ResidencialJson from "./json/residencial.json"
import Loading from "./loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams()
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? ResidencialJson.filter(item => item.category === id) : ResidencialJson);
            }, 1000);
        });
        promesa.then((data) => {
            setItems(data);
            setLoading(false);
        })
    }, [id])

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    )
};

export default ItemListContainer