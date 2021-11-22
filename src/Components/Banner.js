import React from 'react'
import "./Styles/Banner.css"

function Banner() {
    return (
        <div className="banner-comp">
            <div className="outer">
                <div className="content">
                    <h1 className="hd">Endless entertainment and knowledge</h1>
                    <p className="small">Read or listen anytime, anywhere.</p>
                    <button className="btns">Read free for 30 days</button>
                    <p className="small">Only ₹299/month after. Cancel anytime.</p>
                </div>
            </div>
           
        </div>
    )
}

export default Banner
