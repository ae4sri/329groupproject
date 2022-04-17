import { Container } from 'react-bootstrap'
import { comic } from '../../comic'

export const ComicPage = () => {

  return (
    <Container>
      <div id="aboutTitle" style={{ textAlign: "center" }}>Comic</div>
      <div id="warning" style={{ textAlign: "center" }}>(if it doesn't render properly, refresh your page!) </div>
      <div id="iframe">
        <iframe width="1000" height="1100" srcdoc={comic} />
      </div>
      <div id="comicMessage" style={{ textAlign: "center" }}> Would you give your debit to a random stranger
        claiming to be a bank manager?
        Would you do the same online?
        With phishing attacks, adversaries pose as legitemate identities or institutions in order to obtain your sensitive informations such as your e-mail credentials and your credit card information. According to research conducted by FBI, phishing claimed a total of 241,342 victims in 2020.</div>
      <div id="comicCaption" style={{ textAlign: "center" }}> By Cebrail Durna </div>
    </Container>
  )
}


{/* <Image className="mx-auto d-block"  fluid={true} src={comic} /> */ }