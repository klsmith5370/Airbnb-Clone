import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="Katie Zaferes" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) * </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / per person</p>
        </div>
    )
}