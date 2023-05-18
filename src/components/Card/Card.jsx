import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='card row'>
            <h2 className='title'>{props.title} {props.id}</h2>
        </div>
    );
};

export default Card;