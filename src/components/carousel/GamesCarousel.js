import './GameCarousel.scss'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GamesCarousel() {
  return (
    <div>
      <Carousel className='game-carousel'
        autoPlay showThumbs={false}
        dynamicHeight={false}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}>
        <div>
          <img alt="" src="https://cdn.wallpapersafari.com/16/40/LfsDlt.jpg" />
        </div>
        <div>
          <img alt="" src="https://wallpapercave.com/wp/wp4525458.jpg" />
        </div>
        <div>
          <img alt="" src="https://wallpaperaccess.com/full/2426440.jpg" />
        </div>
      </Carousel>
    </div>
  )
}

export default GamesCarousel
