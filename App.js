import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data";

export default function App() {
    const experienceData = data.map((experience) => {
        return (<Card 
            key={experience.id}
            title={experience.title} 
            price={experience.price} 
            coverImg={experience.coverImg} 
            stats={experience.stats}
            location={experience.location}
            openSpots={experience.openSpots}
            
            />)
    })
    return (
        <div>
            <NavBar />
            <Hero />
            <section className="cards-list">
                {experienceData}
            </section>
        </div>
    )
}