import React from 'react'
import "./Styles/Press.css"
import forbes from "../Assets/logo_forbes.svg"
import angeles from "../Assets/logo_los_angeles_times.svg"
import techchrunch from "../Assets/logo_techcrunch.svg"
import today from "../Assets/logo_today.svg"
import wallstreetjournal from "../Assets/logo_wallstreetjournal.svg"

function Press() {
    return (
        <div className="press-com">
            <p className="press">IN THE PRESS</p>
            <div className="logos">
                <img src={techchrunch}/>
                <img src={forbes}/>
                <img src={wallstreetjournal}/>
                <img src={angeles}/>
                <img src={today}/>
            </div>
        </div>
    )
}

export default Press
