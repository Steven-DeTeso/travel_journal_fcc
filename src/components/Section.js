import React from "react";

function Section (props) {
    return (
        <section>
            <img src={props.data.imageUrl} alt="img data"/>
            <div className="section-right">
                <div className="section-top">
                    <img src={require("../images/marker.png")} alt="location marker" />
                    <h5>{props.data.location}</h5>
                    <a href={`${props.data.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <div className="section-bottom">
                    <h1>{props.data.title}</h1>
                    <p className="dates">{props.data.startDate} - {props.data.endDate}</p>
                    <p className="description">{props.data.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Section