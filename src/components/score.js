import React from 'react'

let name2 = "red-error"

let correctArray = [
    <li className="list-item"><h3>1.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>2.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>3.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>4.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>5.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>6.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>7.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>8.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>9.</h3><h1  className="hidden-check">✔</h1></li>,
    <li className="list-item"><h3>10.</h3><h1  className="hidden-check">✔</h1></li>]

export function ErrorBoard(props){

    let errorArray = [<h1>x</h1>, <h1>x</h1>, <h1>x</h1>]

    switch (props.errorCount) {
        case 1:
            errorArray = [<h1 className={name2}>x</h1>, <h1>x</h1>, <h1>x</h1>]
            break;

    
        case 2:
            errorArray = [<h1 className={name2}>x</h1>, <h1 className={name2}>x</h1>, <h1>x</h1>]
            break

        case 3:
            errorArray = [<h1 className={name2}>x</h1>, <h1 className={name2}>x</h1>, <h1 className={name2}>x</h1>]
            break

        default:
            errorArray = [<h1>x</h1>, <h1>x</h1>, <h1>x</h1>]
            break;
    }

    return(
        <div className="error-container">{errorArray}</div>
    )
}

export function ScoreBoard(props){

    if( props.correctCount > 0){
        correctArray[props.correctCount-1] = <li className="list-item"><h3>{props.correctCount}.</h3><h1  className="check">✔</h1></li>
    }else{
        correctArray = [
            <li className="list-item"><h3>1.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>2.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>3.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>4.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>5.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>6.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>7.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>8.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>9.</h3><h1  className="hidden-check">✔</h1></li>,
            <li className="list-item"><h3>10.</h3><h1  className="hidden-check">✔</h1></li>]
    }

   return( <div className="check-container">

                <h1>Correct Answers</h1>
                <ul>
                    {correctArray}
                </ul>
            </div>)
}