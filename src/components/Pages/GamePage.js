import { Container } from "react-bootstrap"

export const GamePage = () => {
  return (
    <div>
        <div id="aboutTitle" style={{ textAlign: "center" }}>Malware Mashers</div>
    <Container id="game" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media"
        src="https://games.construct.net/37839/latest" frameborder="0" allowfullscreen="true"
        msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
        allowpaymentrequest="false" referrerpolicy="unsafe-url"
        sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups"
        scrolling="no"></iframe>

    </Container>
    <div id="comicCaption" style={{ textAlign: "center" }}>By Ayo Alabi. Enter full screen for the full experience!</div>
  </div>

  )
}