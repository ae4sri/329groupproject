import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"
import { Container, Card, Row, Col } from "react-bootstrap"
import { Grid, Paper } from "@mui/material"


export const AboutPage = () => {
    const link = "http://www.example.com/"
    return (
        <Container>
            <div style={{marginTop:'30px'}}></div>
            <div id="aboutTitle" style={{textAlign: "center"}}> Who are we?</div>
            <br />
            <div id="aboutUsDescription">
            We are students at the University of Calgary. This website is our final project for
                CPSC 329 - an informational security course at our University.
            </div>
            <br />
            <Container>
                <Row>
                    <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title class="cardTitle">Amin Elnasri</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">BSc. Computer Science</Card.Subtitle>
                            <Card.Text class="cardText">
                            Developed and hosted the website.
                            <br />
                            </Card.Text>
                            <Card.Link href="#">GitHub</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title class="cardTitle">Ayo Alabi</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Program</Card.Subtitle>
                            <Card.Text class="cardText">
                            Developed the game for the website.
                            <br />
                            <br />
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title class="cardTitle">Umar Hassan</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Program</Card.Subtitle>
                            <Card.Text class="cardText">
                            Developed and styled the website.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title class="cardTitle">Cebrail Durna</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Program</Card.Subtitle>
                            <Card.Text class="cardText">
                                Created the quiz and comic.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                
            </Container>
            
            <br />

            <b>Source Code</b>
            <ul>
                <li><a href="https://github.com/ae4sri/329groupproject">This Website's Source Code</a></li>
                <br />
                <li><a href="https://github.com/ae4sri/329groupproject">The Game's Source Code</a></li>
            </ul>

        </Container>
    )
}