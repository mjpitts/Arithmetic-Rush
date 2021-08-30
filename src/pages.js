import React from 'react'
import './pages.css'
import { Link } from "react-router-dom"
import { AddSubPage } from './components/AddSub'
import { MultDivPage } from './components/MultDiv'
import { ExpoPage } from './components/expo'
import { RootPage } from './components/roots'
import generateProblem from './components/problem'

//export the Addition and subtraction page
export function AddSub() {
    let [problem,answer] = generateProblem("add", 1)
    return (AddSubPage(problem, answer))
}

//export the multiply and divide page
export function MultDiv() {
    return (MultDivPage())
}

//export the exponent page
export function Expo() {
    return (ExpoPage())
}

//export the roots page
export function Roots() {
    return (RootPage())
}

//export the roots page
export function Menu() {
    return (
        <body>
        <div className="desk-background">    
            <div className="menu-container">
                    <header className="menu-header">
                        <h1>Arithmetic Rush</h1>
                        <p>by Michael Pitts</p>
                    </header>
                <div className="menu-grid">
                    <div ><Link className="menu-link" to="addsub">
                        Addition and Subtraction
                            <h1 style={{margin: 0}}>+ -</h1>
                        </Link></div>
                    <div ><Link className="menu-link" to="multdiv">
                        Mutiplication and Division
                        <div>
                            <h1 style={{margin: 0}}>x ÷</h1>
                        </div>
                        </Link></div>
                    <div ><Link className="menu-link" to="expo">
                        Exponents
                        <div>
                            <h1 style={{margin: 0}}>xⁿ</h1>
                        </div>
                        </Link></div>
                    <div ><Link className="menu-link" to="roots">
                        Square Roots
                        <div>
                        <h1 style={{margin: 0}}>√x</h1>
                        </div>
                        </Link></div>
                </div>
            </div>
        </div>    
        </body>
    )
}