import { Container, Card } from "react-bootstrap"
import { Grid } from '@mui/material'
import { IndexCarousel } from "../IndexCarousel";
import { Link } from "react-router-dom";

export const IndexPage = () => {


  return (
    <Container >
      <h1 class="title" style={{ textAlign: "center", marginTop:"20px", fontWeight:"bolder" }}>Welcome to our Project</h1>
      <hr style={{ width:"90%", margin: "auto"}} />
      <br />
      <IndexCarousel />
      <br />
      <Grid container spacing={2}>

        <Grid item xs={6}>

          <Card body>
            <b class="cardTitle">Who are we?</b> 
            <div class="cardText">
            We are students at the University of Calgary. 
            To learn more about us, go to the About Us link in the navigation bar.</div>

          </Card>

          <br />

          <Card body>

            <b class="cardTitle">Our Motivation</b> 

              <div class="cardText">
                Nowadays, almost every aspect of our lives are connected to the internet one way or another.
                From our groceries and furniture, to our bank accounts and health records. Our lives will get more and more digitized as we venture towards the future. 
                As more people get into this uncharted domain, many are faced with threats that they do not know how to prepare for.
                Threats such as an adversary getting a hold of one's passwords and as a result compromising vital
                utilities like bank accounts which cause great harm to people. Considering this, we have decided on creating an informative website to perhaps
                help people prevent these sorts of dangers from happening to them. In this website, we will convey information about security and
                privacy to people so that they can learn more about the potential threats they face by just using the internet, and learn to defend themselves.
              </div>
          </Card>

        </Grid>

        <Grid item xs={6}>
          <Card body>
            <b class="cardTitle">What is this project?</b> 
            <div class="cardText">
              
            Our goal was to create an informative website about security and privacy.
            The purpose of this website is to inform users about what we think is vital information about security and privacy
            (topic 1 in the course) in a creative manner. We've tried to make the process of learning enjoyable.
            And so, on this website, we have: <br />
            <ul>
              <li>A <Link to='/quiz'>quiz</Link></li>
              <li>A <Link to='/comic'>comic</Link></li>
              <li>A <Link to='/game'>game</Link></li>
            </ul>
            </div>
          </Card>

          <br />

          <Card body>
            <b class="cardTitle">What am I supposed to do?</b> 
            <div class="cardText">
            We have some basic instructions for you to go through this website.
            <ol>
              <li>First, check out our comic. Do this by going over to the navigation bar, and clicking "Comic".</li>
              <li>Then, go over and play our game by clicking "Game" in the navigation bar. We ask that you go through the game entirely.</li>
              <li>And lastly, we'd like for you to test your knowledge on what you learned from this website, by heading over to do our quiz. Do this by simply going to "Quiz" on the
                navigation bar.</li>
            </ol>
            </div>
          </Card>

        </Grid>
      </Grid>
      <div style={{marginTop:'30px'}}></div>
    </Container>
  )
}