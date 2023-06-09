import * as React from 'react';
import {Card, CardContent ,CardMedia ,Typography, CardActionArea } from '@mui/material';
import "./item.css"
const Item = ( {data} ) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="350"
            image={data.image}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.price}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
}

export default Item;