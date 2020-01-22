import React from "react"
import { FetchBoard } from "../lib/api"

function Home(){

    return(
        <div>
        <h1>home placeholder</h1>
        <p> {FetchBoard()} </p>
        </div>
    )
}

export default Home