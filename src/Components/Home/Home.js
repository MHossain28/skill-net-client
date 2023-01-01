import { Container } from 'postcss';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
        <Row className='head-banner'>
            <Col className='carosul'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx40zCvNmM8neLk53cHXlVPiXk61R0kJVFzw&usqp=CAU"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/GsmFowBzUMs/maxresdefault.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cdn.sanity.io/images/599r6htc/localized/aa86e965428b06f49ba2c6188545587948a409ae-2120x1000.png?w=1200&q=70&fit=max&auto=format"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <div className='head-text'>
                <h3>Learn deeply, apply your learning and be expert !!!</h3>
                </div>
               <Link to='/courses'> 
                <Button className='btn-course ' variant="secondary" size="lg">
                        View Courses Psge
                    </Button>
                </Link>
            </Col>
        </Row>        
        </div>
    );
};

export default Home;