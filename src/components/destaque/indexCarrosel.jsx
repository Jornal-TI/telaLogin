import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../img/senacXsantander.jpg';

function UncontrolledExample() {
  return (  
    <div className='container' wid>
    <Carousel>
      <Carousel.Item>
      <img src={ExampleCarouselImage} text="Second slide" />
        <Carousel.Caption>
          <div className='txtCarousel1'>
            <div></div>
          <h3>Senac divulga parceria com banco Santander referente a bolsas de estudo. </h3>
          <p>Devido a crescente vertente do mercado de trabalho na área de tecnologia, a instituição Senac dispôs de parceria com banco Santander.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ExampleCarouselImage} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ExampleCarouselImage} text="Second slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;