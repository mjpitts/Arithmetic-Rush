import React from 'react'

export function Start(props){

let name = ''

//set the visability of the overlay.
    if(props.visable == true){
        name='endgame-overlay--visable'
    } else {
        name='endgame-overlay'
    }

    return(
    <div className={name}>
    <p style={{fontSize:'3rem', textAlign:'center'}}>
        Rules:<br></br>
        Answer 10 question is under 30 seconds to win.<br></br>
        If you go over the time Limit you lose.<br></br>
        If you get 3 wrong you lose.<br></br>
        Good Luck, <br></br>
        Have Fun <br></br>
    </p>
    <h1 className="end-header">Ready?</h1> 
    <button  className="start-button" onClick={props.startTimer} >Start</button>
    </div>
    )
}