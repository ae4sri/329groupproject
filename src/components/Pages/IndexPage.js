import { Container, Card, Button, Collapse } from "react-bootstrap"
import { Grid } from '@mui/material'
import { useState } from "react";


export const IndexPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Hello,</h1>
      <p style={{ textAlign: "center" }}>welcome to our group project for CPSC 329.</p>
      <Grid container spacing={2}>

        <Grid item xs={6}>

          <Card body>
            <b>Who are we?</b> <br />
            We are students at the University of Calgary. We are <br />
            <i>Amin Elnasri, Ayomide Alabi, Umar Hassan, Cebrail Emin Durna</i>
          </Card>

          <br />

          <Card body>
            <b>Who did what?</b> <br />
            This website was created and programmed by Amin and Umar. The whole group contributed to its content and design however.
            The game was created by Ayo, however the whole group helped determine its level design, information, and gameplay.
            The quiz, and the comic were both created by Cebrail. We all gave input on every component of the project, and regularly
            communicated ideas back and forth throughout the project's creation.

          </Card>
          <br />

          <Card body>

            <b>Our Motivation</b> <br />

            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}>Click To View
            </Button>

            <Collapse in={open}>
              <div id="example-collapse-text">
                Nowadays, almost every aspect of our lives are connected to the internet one way or another.
                From our groceries and furniture to our bank accounts and health records. And the trend is that
                our lives will get more and more digitized as we venture towards the future. As more people get
                into this uncharted domain, many are faced with threats that they do not know how to prepare for.
                Threats such as an adversary getting a hold of one's passwords and as a result compromising vital
                utilities like bank accounts which cause great harm to a person’s financial abilities. Another aspect
                which can also be viewed under the topic of privacy is a person’s rights online, how much say do we
                have over our data? Since our lives are being moved online, our rights should as well. But for many,
                these topics aren’t relevant as very often, we disregard the seriousness of the internet domain.
                In order to promote and maintain a productive environment over the internet we should inform people of
                the threats they face and what they can do to protect against it. Almost everyone refers to the internet
                for information. As a result the easiest and most effective way to reach mass amounts of people would be
                through the internet itself. Considering this, we have decided on creating an informative website which
                everyone could reach just by “googling”. In this website, we will convey information about security and
                privacy to people so that they can learn more about the potential threats they face by just using the internet.
              </div>
            </Collapse>
          </Card>

        </Grid>

        <Grid item xs={6}>
          <Card body>
            <b>What is this project?</b> <br />
            Our goal was to create an informative website about security and privacy.
            The purpose of this website is to inform users about what we think is vital information about security and privacy
            (topic 1 in the course) in a creative manner. We've tried to make the process of learning enjoyable.
            And so, on this website, we have: <br />
            <ul>
              <li>A quiz</li>
              <li>A comic</li>
              <li>A game</li>
            </ul>
          </Card>

          <br />

          <Card body>
            <b>What am I supposed to do?</b> <br />
            We have some basic instructions for you to go through this website.
            <ol>
              <li>First, check out our comic. Do this by going over to the navigation bar, and clicking "Comic".</li>
              <li>Then, go over and play our game by clicking "Game" in the navigation bar. We ask that you go through the game entirely.</li>
              <li>And lastly, we'd like for you to test your knowledge on what you learned from this website, by heading over to do our quiz. Do this by simply going to "Quiz" on the
                navigation bar.</li>
            </ol>
          </Card>

        </Grid>
      </Grid>
    </Container>
  )
}