import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css';

const Courses = () => {

    const allCourses = useLoaderData();
    
    console.log(allCourses);

    return (
        <div>
            <div className='courses'>
                <div className='left-side'>
                    <h2>Course Option</h2>
                    {
                        allCourses.map(course=><p><Link to={`/courses/${course.id}`} >{course.title}</Link></p>)
                    }
                </div>
                <div className='right-side'>
                    {
                        allCourses.map(course=><Link to={`/courses/${course.id}`} className='card-btn-link'>
                        <div className='css-card'>
                            <img src={course.image} alt="" />
                            <div className='css-intro'>
                                <h3>{course.title}</h3>
                                <p>{course.description.slice(0, 70)+'...'}</p>
                            </div>
                        </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;