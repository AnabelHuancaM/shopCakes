import { useEffect, useState } from 'react';
import Cupcake from '../cards/Cupcake.js';

const Cupcakes = ( {peticion} ) => {

    const [cupcakes, setCupcakes] = useState()

    useEffect( () => {// traer todos los datos
       fetch(`http://localhost:3050/${peticion}`)
        .then(response => response.json()) //respuesta a json
        .then(data => setCupcakes(data)) //cupcakes tendra el valor de data
    }, [])

    return(
    <div className="container">
        <h2>Échale un vistazo a nuestros cupcakes</h2>
        {
        cupcakes ? (
            <section className='row gy-4'>{
                cupcakes.map(({
                    id,
                    descripcion, 
                    sabor, 
                    imagen, 
                    color, 
                    precio
                }) => (
                    <Cupcake 
                    key={id}
                    imagen={imagen} 
                    descripcion={descripcion}
                    sabor={sabor}
                    color={color}
                    precio={precio}/>
                ))
            }</section>
            
        ) : (<span>Cargando....</span>)
        }
    </div>
        
    )
}

export default Cupcakes