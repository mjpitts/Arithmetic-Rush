import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import generateProblem from './problem'
import { EndgameOverlay } from './endgameOverlay'
import { ErrorBoard } from './score'
import { ScoreBoard } from './score'
import { Start } from './beginningOverlay'
import { BeginningTimer } from './timerOverlay'

export function AddSubPage(currentProblem, currentAnswer){
    
    const [error, setError] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [userData, setUserData] = useState('')
    const [problem, setProblem] = useState(currentProblem)
    const [answer, setAnswer] = useState(currentAnswer)
    const [end, setEnd] = useState(false)
    const [start, setStart] = useState(true)
    const [timer, setTimer] = useState(false) 

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
        let [nextProblem, nextAnswer] = generateProblem("add", Math.ceil(correct/2));
        setProblem(nextProblem);
        setAnswer(nextAnswer);
    }

    function gameReset(){
        setCorrect(0)
        setError(0)
        setEnd(false)
        setStart(true)
        setTimer(false)
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
        <div className="page-layout">
        <h1 className="problem-header">Time to Add And Subtract</h1>
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
