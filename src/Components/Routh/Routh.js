import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import CourseCheckOut from "../CourseCheckOut/CourseCheckOut";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from '../Ragister&Login/Login';
import Ragister from '../Ragister&Login/Ragister';
import SingleCourse from "../SingleCourse/SingleCourse";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader:()=>fetch(`https://online-education-server-chi.vercel.app/courses`)
            },
            {
                path:'/courses/:id',
                element:<SingleCourse></SingleCourse>,
                loader:({params})=>fetch(`https://online-education-server-chi.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/ragister',
                element: <Ragister></Ragister>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CourseCheckOut></CourseCheckOut></PrivateRoute>,
                loader:({params})=>fetch(`https://online-education-server-chi.vercel.app/courses/${params.id}`)
            }

        ]

    }
])