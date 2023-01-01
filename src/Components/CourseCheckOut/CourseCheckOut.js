import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseCheckOut.css';

const CourseCheckOut = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='cart'>
            
            <h2 className='text-center'>Do you buy the course, "{course.title}"?</h2>
            <Card className="text-center m-5">
                <Card.Header>Price: ${course.price}</Card.Header>
                <Card.Body>
                    <Card.Title>Course Name: {course.title}</Card.Title>
                    <Card.Img variant="top" height='400px' src={course.image} />
                    <Card.Text>
                    {course.description}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Current Student: {course.rating.count}</Card.Footer>
            </Card>
        </div>
    );
};

export default CourseCheckOut;