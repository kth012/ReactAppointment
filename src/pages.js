import React from "react"
import {Link} from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about"> about</Link>
                <Link to="events"> events </Link>
                <Link to="contact"> contacts</Link>
            </nav>
        </div>
    )
}

export function W404() {
    return(
        <h1> Page not Found </h1>
    )
}

export function About(){
    return(
        <div>
            <h1>[About]</h1>
        </div>
    )
}

export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}