import React from 'react'
import { Link } from 'react-router-dom'
import generateProblem from './problem.js'

export function ExpoPage(){
    return(
        <div className="desk-background">    
        <div className="menu-container">
        <div className="page-layout">
        <h1 className="problem-header">Time to Work with Exponents</h1>
        <Link to="/" className="home-button">Home</Link>
         <div className="problem">{generateProblem("expo", 1)}</div>
         <form className="input-form">
            <input type="text" placeholder="Answer"></input><br></br>
            <input type="submit" value="Submit"></input>
         </form>
         
        </div>
    </div>
    </div>
    )
}
