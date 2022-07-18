import Carousel from 'react-bootstrap/Carousel';

export const Carrusel =()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="flex-center"
          src={require('../../img/python.png')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="flex-center"
          src={require('../../img/React2.png')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="flex-center"
          src={require('../../img/Javascript2.png')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="flex-center"
          src={require('../../img/html.png')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

