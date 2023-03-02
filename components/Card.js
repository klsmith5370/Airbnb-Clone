import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.coverImg}`} alt="cover image" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) * </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / per person</p>
        </div>
    )
}