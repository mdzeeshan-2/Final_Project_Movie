import "./MovieCard.css"
import ProgressCircle from "../Circle/circle"
import Ellipsis from "../Ellipses/ellipses"
const getPosterUrl = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/w1280${posterpath}`
}

const MovieCardFree = ({poster_path, title,vote_average, name,first_air_date, release_date})=>{
return <div className="MCard" onClick={() => { window.location = "https://movie-detail-three.vercel.app/" }}>
   <div className="progress">
   <img className="poster_img" src={getPosterUrl(poster_path)} alt={title} />
  <div className="progress_circle1">
  <ProgressCircle percent={vote_average*10}/>
  </div>
  <div className="progress_circle2">
  <Ellipsis />
  </div>
   </div> 
    <div className="MCard2"> 
    <h3 className="MovieName">{title||name}</h3>
    <p className="MoviePara">{release_date||first_air_date}</p>
    </div>
</div>
}
export default MovieCardFree;
