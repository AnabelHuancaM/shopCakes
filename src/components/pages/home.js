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

export default Home