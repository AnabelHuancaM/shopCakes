import Cupcakes from './cupcakes';
import Servicios from '../sections/Servicios';
import Banner from '../sections/Banner.js';

const Home =() => {
    return(
    <>
      <Banner/>
      <section className='mt-5'>
        <Cupcakes peticion="cupcakes?sabor_like=fresa"/>
        <Servicios peticion="servicios"/>
      </section>
    </>
    )
}

//boton vender, 
//funcion reservar conexion a la bd metodo get 
//estado vendido
//valor true o false
export default Home