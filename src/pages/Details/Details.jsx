import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Item from '../../components/Item/Item';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [item, setItem] = useState({})

    let { id } = useParams();
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) => 
            setItem(res.data)
        )
    }, [id]);

    return (
    <div><Item data={item}/></div>
    )
}

export default Details