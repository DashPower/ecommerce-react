import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import CustomProvider from './components/CustomProvider';


function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;

