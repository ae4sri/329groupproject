import Carousel from 'react-bootstrap/Carousel'
import codePicture from '../images/codePicture.png'
import quiz from '../images/quiz.png'
import comicExample from '../images/comicExample.png'


//  images should have a width of 1296, height of 500 
export const IndexCarousel = () => {

  return (
    <div className='mb-3'>
      <Carousel >
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={codePicture}
            alt="Second slide"
            
          />
        </Carousel.Item>
        <Carousel.Item>

         <img
            className="d-block w-100"
            alt="First slide"
            src={comicExample}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img

            className="d-block w-100"
            src={quiz}
            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
    </div>
  )
}