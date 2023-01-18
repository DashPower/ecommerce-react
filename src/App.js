import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
<BrowserRouter>
    <Header/>
    <Main/>
</BrowserRouter>
    
    
    </>
  );
}

export default App;

