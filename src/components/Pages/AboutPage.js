import { useHref } from "react-router-dom"
import { Link } from "react-router-dom"
import { Container, Card, Row, Col } from "react-bootstrap"
import { Grid, Paper } from "@mui/material"


export const AboutPage = () => {
    const link = "http://www.example.com/"
    return (
        <Container>
            <div id="aboutTitle" style={{ textAlign: "center" }}> Who are we?</div>
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
                                {/* <Card.Subtitle className="mb-2 text-muted">BSc. Computer Science</Card.Subtitle> */}
                                <Card.Text class="cardText">
                                    Developed and hosted the website.
                                    <br />
                                </Card.Text>
                                <Card.Link href="#"><a href="https://github.com/ae4sri/">GitHub</a> </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title class="cardTitle">Ayo Alabi</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Program</Card.Subtitle> */}
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
                                {/* <Card.Subtitle className="mb-2 text-muted">Program</Card.Subtitle> */}
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
                                {/* <Card.Subtitle className="mb-2 text-muted">Program</Card.Subtitle> */}
                                <Card.Text class="cardText">
                                    Created the quiz and comic.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />

        </Container>
    )
}