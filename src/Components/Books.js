import React from 'react'
import "./Styles/Books.css"
import img1 from "../Assets/1.png"
import img2 from "../Assets/2.png"
import img3 from "../Assets/3.png"
import img4 from "../Assets/4.png"
import img5 from "../Assets/5.png"
import img6 from "../Assets/6.png"
import img7 from "../Assets/7.png"
import img8 from "../Assets/8.png"
import img9 from "../Assets/9.png"
import img10 from "../Assets/10.png"
import img11 from "../Assets/11.png"
import img12 from "../Assets/12.png"

function Books() {
    return (
        <div className="books-comp">
            <h1 className="heading">THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h1>
            
            <div className="imgs">
                <div>
                    <img src={img1}/>
                </div>
                <div>
                    <img src={img2}/>
                </div>
                <div>
                    <img src={img3}/>
                </div>

                <div>
                    <img src={img4}/>
                </div>
                
                <div className="res1">
                    <img src={img5}/>
                </div>
               
                <div className="res1">
                    <img src={img6}/>
                </div>
                
                <div className="res">
                    <img src={img7}/>
                </div>
                
                <div className="res">
                    <img src={img8}/>
                </div>
                
                <div className="res">
                    <img src={img9}/>
                </div>
                
                <div className="res">
                    <img src={img10}/>
                </div>
                
                <div className="res">
                    <img src={img11}/>
                </div>

                <div className="res">
                    <img src={img12}/>
                </div>
                
                
            </div>
            
            <button className="btn1">Read for 30 days</button>
            <button className="btn2">Cancel anytime.</button>
        </div>
    )
}

export default Books
