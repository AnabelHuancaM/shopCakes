import Header from './sections/Header.js';
import Footer from './sections/Footer.js';
import Home from './pages/home.js';
import Cupcakes from './pages/cupcakes.js';
import AboutUs from './pages/aboutUs.js';
import estilos from '../estilos.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () =>{
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/cupcakes' element={ <Cupcakes title peticion="cupcakes" /> } />
        <Route path='/nosotros' element={ <AboutUs/> } />
        <Route path='/' element={ <Home/>} /> 

    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;