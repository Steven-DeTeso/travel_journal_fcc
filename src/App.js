import React from "react"

import NavBar from "./components/NavBar"
import Section from "./components/Section"
import data from "./data"

function App () {
    const section = data.map(data => {
        return (<Section 
        key={data.id}
        data={data}
        />)
    })
    return (
    <div className="page-container">
        <NavBar />
        {section}
    </div>
    )
}

export default App