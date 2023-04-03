import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../Item/Item';
import "./ItemList.css"
import { Link } from 'react-router-dom';
const ItemList = ({item}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios("https://fakestoreapi.com/products").then((res) => 
            setItems(res.data)
        )
    }, []);

    return (
        <div className='Items-List'>
            {items.map(( item ) => {
                return (
                    <div key={item.id}>
                        <Link to = {`/item/${item.id}`} >
                            <Item data={item}/>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemList