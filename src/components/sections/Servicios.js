import useFetch from '../../hooks/useFetch';
const Servicios =({peticion}) => {

    const [servicios, error] = useFetch(peticion)
        
    if (error) {
        return <span>Hubo un error</span>
    }
    
    if (!servicios || servicios.lenght === 0) {
        return <span>No hay servicios</span>
    }
    
    return(
        <section className='container'>
    {
        servicios.map(s=> (
            <div key={s.id} className=''>
                <h3>{s.nombre}</h3>
                <p >{s.descripcion}</p>
                <img src={s.imagen} className="img-fluid "/>
            </div>
        ))
    }
    </section>
)
}

export default Servicios