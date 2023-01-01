import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <div>
                <h4>
                    1.what is cors?
                </h4>
                <p>
                    CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources
                </p>
            </div>
            <div>
                <h4>
                    2.Why are you using firebase? What other options do you have to implement authentication?
                </h4>
                <p> 
                    I use firebase for authentication and hosting.
                    <br />
                    Other options for the implement of authentication:-
                    Multi-factor authentication, Certificate-based authentication, Biometric authentication(Facial recognition, Fingerprint scanners, Speaker Recognition, Eye scanners)
                </p>
            </div>
            <div>
                <h4>
                    3.How does the private route work?
                </h4>
                <p>
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.

                    PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                </p>
            </div>
            <div>
                <h4>
                    4.What is Node? How does Node work?
                </h4>
                <p> 
                    Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. 
                    <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                    Node.js basically works on two concept

                    Asynchronous
                    Non-blocking I/O
                    Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.

                    Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn’t work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.

                    To implement the concept of the system to handle the request  node.js uses the concept of Libuv.

                    Libuv is an open-source library built-in C. It has a strong focus on asynchronous and  I/O, this gives node access to the underlying computer operating system, file system, and networking.

                    Libuv implements two extremely important features of node.js  
                    Event loop
                    Thread pool
                </p>
            </div>
        </div>
    );
};

export default Blog;