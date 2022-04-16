import { Container } from 'react-bootstrap'
import comic from '../../images/xkcdfiller.png'
import Image from 'react-bootstrap/Image'
import { Grid, Item } from '@mui/material'
import one from '../../images/comic/1.png'
import two from '../../images/comic/2.png'
import three from '../../images/comic/3.png'
import four from '../../images/comic/4.png'
import five from '../../images/comic/5.png'
import six from '../../images/comic/6.png'
import seven from '../../images/comic/7.png'
import eight from '../../images/comic/8.png'

export const ComicPage = () => {
  return (
    <Container>
      <div id="aboutTitle" style={{ textAlign: "center" }}>Comic</div>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={one} />
        </Grid>
        <Grid item xs={4}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={two} />
        </Grid>
        <Grid item xs={4}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={three} />
        </Grid>
        <Grid item xs={6}>
          <img className="mx-auto d-block" height={400} width={400} fluid={true} src={four} />
        </Grid>
        <Grid item xs={6}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={five} />
        </Grid>
        <Grid item xs={4}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={six} />
        </Grid>
        <Grid item xs={4}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={seven} />
        </Grid>
        <Grid item xs={4}>
          <img className="mx-auto d-block" height={400} width={350} fluid={true} src={eight} />
        </Grid>

      </Grid>
      <div id="comicCaption" style={{ textAlign: "center" }}> By Cebrail Durna </div>
    </Container>
  )
}


{/* <Image className="mx-auto d-block"  fluid={true} src={comic} /> */ }