import  PropTypes from "prop-types"

const Cupcake = ({
    descripcion, 
    sabor, 
    imagen, 
    color, 
    precio
}) => {
    return(
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="card" >
                <img src={imagen} className="card-img-top" alt={sabor} />
                <div className="card-body">
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">Color: {color}</p>
                    <p className="card-text">Precio:{precio}</p>
                </div>
            </div>
        </div>
    )
}

Cupcake.propTypes = {
    precio : PropTypes.number.isRequired
}


export default Cupcake