import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
    <Header/>
    <ItemListContainer greetings="Jose"/>
    <Footer/>
    </>
  );
}

export default App;

