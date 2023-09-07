import useFetch from '../../hooks/useFetch';
import Cupcake from '../cards/Cupcake.js';

const Cupcakes = ({peticion, title}) => {

    const [cupcakes] = useFetch(peticion)

    return(
    <div className="container">
        { title && <h2>Échale un vistazo a nuestros cupcakes</h2>}
        {
        cupcakes ? (
            <section className='row gy-4'>{
                cupcakes.map(({
                    id,
                    descripcion, 
                    sabor, 
                    imagen, 
                    color, 
                    precio,
                    estado
                }) => (
                    <Cupcake 
                    key={id}
                    imagen={imagen} 
                    descripcion={descripcion}
                    sabor={sabor}
                    color={color}
                    precio={precio}
                    estado={estado}/>
                ))
            }</section>
            
        ) : (<span>Cargando....</span>)
        }
    </div>
        
    )
}

export default Cupcakes