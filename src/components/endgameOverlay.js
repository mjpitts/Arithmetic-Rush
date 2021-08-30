import React, {useRef, useEffect} from 'react'

export function EndgameOverlay(props) {
    let name = ''

    if(props.visable == true){
        name='endgame-overlay--visable'
    } else {
        name='endgame-overlay'
    }
    
    const resetButtonRef = useRef(null)

    useEffect(() => {
    if(props.visable == true){
        resetButtonRef.current.focus()
    }
    }, [props.visable])

    if(props.right >= 10 ){

        return(
            <div className={name}>
            <h1 className="end-header">You Won</h1>
            <button ref={resetButtonRef} className="reset-button" onClick={props.resetGame} >Reset</button>
            </div>)

    } else if (props.wrong >= 3) {

        return(
            <div className={name}>
            <h1 className="end-header">You Lost</h1> 
            <button ref={resetButtonRef} className="reset-button" onClick={props.resetGame} >Reset</button>
            </div>)

    }
    else{
        return(
            <div className={name}>
            <h1 className="end-header">You should not be seeing this right now</h1>
            <button ref={resetButtonRef} className="reset-button" onClick={props.resetGame} >Reset</button>
            </div>
        )   
    }
}