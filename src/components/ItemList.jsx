import React from "react";
import Item from "./Item";


const ItemList = ({items}) => {
    return(
        <div className="row mx-auto">
            <h5>Nuestros Productos</h5>
            {
                items.map(item =>
                    <div className="col my-3" key={item.id}>
                        <Item item={item} />
                    </div>
                )
            }
        </div> 
    );
};

export default ItemList;