import React from "react"
import Header from "./components/Header"
import Location from "./components/Location"
import data from "./data"

export default function App(){
    const places = data.map(place => {
        return (
            <Location
                key={place.id}
                {...place}
            />
        )
    })
    
    return (
        <div>
            <Header />
            {places}
        </div>
    )
}