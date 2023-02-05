import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import CustomProvider from './components/CustomProvider';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      <ToastContainer position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </CustomProvider>
  );
}

export default App;

