import React from 'react';
import './Card.css';

function Card({ header, meta, onClick = oc => oc, id }) {
    return (
        <div className="card" key={id} onClick={onClick}>
            <h2 className="card__title">{header}</h2>
            <p className="card__meta">{meta}</p>
        </div>
    )
}

export default Card
