import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import generateProblem from './problem'
import { EndgameOverlay } from './endgameOverlay'
import { ErrorBoard } from './score'
import { ScoreBoard } from './score'
import { Start } from './beginningOverlay'
import { BeginningTimer } from './timerOverlay'

export function MultDivPage(currentProblem, currentAnswer){
    
    const [error, setError] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [userData, setUserData] = useState('')
    const [problem, setProblem] = useState(currentProblem)
    const [answer, setAnswer] = useState(currentAnswer)
    const [end, setEnd] = useState(false)
    const [start, setStart] = useState(true)
    const [timer, setTimer] = useState(false) 
    const [count, setCount] = useState(0)

        //Game timer that counts down from 30, once timer goes past
        // 0 time is up
    const tick = () => {  
        if( timer === true && start === false  && end === false){
            setCount(1+count)
                
        }
    };
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    //sets timer up for 30 seconds. the additional 3 seconds
    //come from the beginning timer.
    if( count > 33 && end === false){
        setError(3)
        setEnd(true)
}

    //handles the score and reloads a new problem on submit
    function handleSubmit(e) { 
        e.preventDefault();
        if(userData == answer){
            setCorrect(1 + correct);
            if(1+correct === 10){
                setEnd(true)
            }
            setUserData('')
        } else {
            setError(1 + error)
            if(1+error === 3){
                setEnd(true)
            }
            setUserData('');
        }
        let [nextProblem, nextAnswer] = generateProblem("multiply", 1);
        setProblem(nextProblem);
        setAnswer(nextAnswer);
    }

    function gameReset(){
        setCorrect(0)
        setError(0)
        setEnd(false)
        setStart(true)
        setTimer(false)
        setCount(0)
    }

    function startTimer(){
        setStart(false)
        setTimer(true)
    }

    return(
    //display ui 
    <>
    <div className="desk-background">    
    <div className="menu-container">
        <div className='countdownTimer'>
            <h1 style={{fontSize:'4rem'}}>{33-count}</h1> 
        </div>
        <div className="page-layout">
        <h1 className="problem-header">Time to Multiply And Divide</h1>
        <Link to="/" className="home-button">Home</Link>
         <div className="problem">{problem}</div>
         <form className="input-form" onSubmit={handleSubmit} action=''>
            <input value={userData} type="text" placeholder="Answer" id="answerBox" onChange={(e) => setUserData(e.target.value)}></input><br></br>
            <input type="submit" value="Submit"></input>
         </form>
        </div>
    </div>
    </div>

        <div className="visuals-container">
            <ErrorBoard errorCount={error} />
            <ScoreBoard correctCount={correct} />
        </div>

    <EndgameOverlay visable={end} wrong={error} right={correct} resetGame={gameReset}/>
    <Start visable={start} startTimer={startTimer}/>
    <BeginningTimer visable={timer} hoursMinSecs={3} begin={timer}/>
    </>
    )

}
