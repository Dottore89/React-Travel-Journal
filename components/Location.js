import React from "react"

export default function Location(props){
    return (
        <div className="location">
            <img src={props.imageUrl} />
            <div className="location-txt">
                <div className="country-div">
                 <img src="../images/Location.png" />
                 <h4>{props.location}</h4>
                 <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
            <hr />
        </div>
    )
}