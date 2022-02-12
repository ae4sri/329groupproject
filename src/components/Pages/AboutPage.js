import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"

export const AboutPage = () => {
  return (
    <>
        <b>Who are we?</b>
        <br />
        <i>Amin Elnasri, Ayomide Alabi, Umar Hassan, Cebrail Emin Durna</i>
        <br />
        <br />
        <b>Who did what?</b> <br />
    This website was created and programmed by Amin and Umar. The whole group contributed to its content and design however.
    The game was created by Ayo, however the whole group helped determine its level design, information, and gameplay.
    The quiz, and the comic were both created by Cebrail. We all gave input on every component of the project, and regularly
    communicated ideas back and forth throughout the project's creation.

    <br />
    <br />

    <b>Source Code</b>
    <ul>
      <li><Link to=".">Website Source Code</Link></li>
      <br />
      <li><Link to=".">Game Source Code</Link></li>    
    </ul>
    
    </>
  )
}