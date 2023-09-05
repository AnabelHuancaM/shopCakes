import  PropTypes from "prop-types"

//button


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

                    {
                        //button
                    }
                    <a href="#" class="btn btn-primary">Vender</a>
                </div>
            </div>
        </div>
    )
}

Cupcake.propTypes = {
    imagen: PropTypes.string,
    sabor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    precio : PropTypes.number
}

  /*valores por defecto */
Cupcake.defaultProps = {
    imagen : "https://i.pinimg.com/originals/22/51/79/2251791e43795b433321fb468c22e6cb.gif",
    precio: 0
}

export default Cupcake