
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routh/Routh';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
