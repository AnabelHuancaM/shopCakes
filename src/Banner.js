const Banner = () => {

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://wallpapercosmos.com/w/full/e/b/5/589657-3840x2160-desktop-4k-cupcake-background-image.jpg" class="d-block w-100 " alt="..."/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://wallpapercosmos.com/w/full/8/1/6/589561-3840x2160-desktop-4k-cupcake-background-photo.jpg" class="d-block w-100 " alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercosmos.com/w/full/b/c/8/589652-3554x1999-desktop-hd-cupcake-background-photo.jpg" class="d-block w-100 " alt="..."/>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Antes</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

}

export default Banner