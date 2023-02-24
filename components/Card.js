import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="../images/katie-zaferes.png" alt="Katie Zaferes" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / per person</p>
        </div>
    )
}