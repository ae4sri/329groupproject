import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"

export const AboutPage = () => {
  return (
    <>
        <b>Who are we?</b>
        <br />
        <i>We are students at the University of Calgary. This website is our final project for 
          CPSC 329 - an informational security course at our University.
        </i>
        <br />
        <br />
        <b>Our Names</b>
        <br />
        <ul>
          <li>Amin Elnasri</li>
          <li>Ayo Alabi</li>
          <li>Umar Hassan</li>
          <li>Cebrail Durna</li>
        </ul>
    <b>Source Code</b>
    <ul>
      <li><Link to=".">Website Source Code</Link></li>
      <br />
      <li><Link to=".">Game Source Code</Link></li>    
    </ul>
    
    </>
  )
}