import React from 'react';
import './card.style.css'

export const Card = (props) => {
    return(
        <div className="card">
            <img atl="monster" src={`https://robohash.org/199.58.86.11${props.monster.id}.png`} />
            <h2> { props.monster.name }</h2>
            <h4> { props.monster.email}</h4>
        </div>
    )
} 