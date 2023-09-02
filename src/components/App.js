import Header from './sections/Header.js';
import Home from './pages/home.js';
import Cupcakes from './pages/cupcakes.js';
import AboutUs from './pages/aboutUs.js';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () =>{
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/cupcakes' element={ <Cupcakes/> } />
        <Route path='/nosotros' element={ <AboutUs/> } />
        <Route path='/' element={ <Home/>} /> 

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;