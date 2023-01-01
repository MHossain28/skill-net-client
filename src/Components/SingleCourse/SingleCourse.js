import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './SingleCourse.css';

const ref = React.createRef();

const SingleCourse = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='single-course'>
            
            <Card className='mt-5 w-2'>
                <Card.Header className='d-flex justify-content-between'>
                    <h1>Course Title: {course.title}</h1>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {
                        ({ toPdf }) => <button  className='pdf-btn' onClick={toPdf}>Take Pdf File</button>
                        }
                    </Pdf>
                </Card.Header>
                <Card.Img src={course.image}></Card.Img>
                
                <Card.Body ref={ref}>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                    {course.description}
                    </Card.Text>
                    <Link to={`/checkout/${course.id}`}><Button variant="dark">Get premium access</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;