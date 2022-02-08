import Carousel from 'react-bootstrap/Carousel'
import land1 from '../images/land1.png'
import land2 from '../images/land2.jpg'
import land3 from '../images/land3.jpg'

// eventually, we change these photos with photos of the actual game

export const IndexCarousel = () => {

  const width = 400
  const height = 600

  return (
    <div className='mb-3'>
      <Carousel>
        <Carousel.Item>
          <img
            width={width} height={height}
            className="d-block w-100"
            src={land1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Picture of Game</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={width} height={height}

            className="d-block w-100"
            src={land2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Picture of a piece of the comic</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={width} height={height}

            className="d-block w-100"
            src={land3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Picture of some of the quiz (maybe)</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}