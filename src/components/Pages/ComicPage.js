import { Container } from 'react-bootstrap'
import comic from '../../images/xkcdfiller.png'
import Image from 'react-bootstrap/Image'
export const ComicPage = () => {
  return (
    <Container>
      <div id="aboutTitle" style={{ textAlign: "center" }}> Comic </div>
      <br />
      <Image className="mx-auto d-block"  fluid={true} src={comic} />
      <div id="comicCaption" style={{ textAlign: "center" }}> By Cebrail Durna </div>
    </Container>
    )
}