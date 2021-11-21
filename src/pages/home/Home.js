import GamesCarousel from "../../components/carousel/GamesCarousel"
import GameCollections from "../../components/game-collections/GameCollections"
import Navbar from "../../components/navbar/Navbar"



function Home() {
  return (
    <div>
      <Navbar />
      <GamesCarousel />
      <GameCollections />
    </div>
  )
}

export default Home
