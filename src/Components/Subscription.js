import React from 'react'
import "./Styles/Subscription.css"

function Subscription() {

    const content = [
        {
            icon:"fas fa-book-open",
            name:"Books",
        },
        {
            icon:"fas fa-headphones",
            name:"Audiobooks"
        },
        {
            icon:"fas fa-book",
            name:"Magazines"
        },
        {
            icon:"fas fa-microphone-alt",
            name:"Podcasts"
        },
        {
            icon:"fas fa-music",
            name:"Sheet Music"
        },
        {
            icon:"fas fa-file-alt",
            name:"Documents"
        }

    ]
    return (
        <div className="subs-comp">
            <div className="frst-sub">
                <h1 className="all">All in one simple subscription</h1>
                <div className="contents">
                    {
                        content.map(con => (
                            <div className="con">
                                <i class={con.icon}/>
                                <p>{con.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="sec-sub">
                <h1 className="scribd">Scribd is overall the best and most convenient deal for online reading.</h1>
                <p>Buisness Insider</p>
            </div>
        </div>
    )
}

export default Subscription
