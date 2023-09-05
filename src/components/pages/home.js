import Cupcakes from './cupcakes';

const Home =() => {
    return(
    <>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://wallpapercosmos.com/w/full/e/b/5/589657-3840x2160-desktop-4k-cupcake-background-image.jpg" className="d-block w-100 " alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              <h5>Bienvenidos a Shop Cakes</h5>
              <p>Disfruta de nuestros cupcakes.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://wallpapercosmos.com/w/full/8/1/6/589561-3840x2160-desktop-4k-cupcake-background-photo.jpg" className="d-block w-100 " alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              <h5>Shop Cakes</h5>
              <p>Donde los Sueños Dulces se Hacen Realidad.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://wallpapercosmos.com/w/full/b/c/8/589652-3554x1999-desktop-hd-cupcake-background-photo.jpg" className="d-block w-100 " alt="..."/>
              <div className="carousel-caption d-none d-md-block">
              <h5>Shop Cakes</h5>
              <p>Explora Nuestra Selección de Cupcakes Exquisitos.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Antes</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
        </div>
        <section className='mt-5'>
          <Cupcakes peticion="cupcakes?sabor_like=fresa" />
        </section>
    </>
    )
}

export default Home