import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data";

export default function App() {
    const experienceData = data.map((experience) => {
        return (<Card 
            key={experience.id}
            experience={experience}
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