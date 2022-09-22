import './App.css';
import Header from'./components/Header';
import Gallery from './components/Gallery';
import FormSuscribe from './components/FormSuscribe';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Gallery/>
     <FormSuscribe/>
     <Footer/>
    </div>
  );
}

export default App;
