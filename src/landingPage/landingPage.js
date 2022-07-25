import React from 'react'
import "./landingPage.css"
import {Link} from "react-router-dom"

export default function LandingPage() {
  return (
    <div id="container">
      <div>
        <img src={require("../images/landingPage.jpg")} alt="img" />
      </div>
      <div id="next-container">
<h3>10x Team 04</h3>
<Link to="/postView"><button>Enter</button></Link>

      </div>
    </div>
  )
}
