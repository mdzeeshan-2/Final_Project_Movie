import "./page.css"
import StarCard from "./card";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Banner = () =>{
   
    return <div className="banner">
    <div className="banner-wrapper">
    <div className="heading_banner">
    <div className="head_head_banner">
    </div> 
    <div className="parent_container">
    <StarCard  imageURL='https://www.themoviedb.org/t/p/w1280/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' /> 
    <div className="banner-info">
        <h1> <span>John Wick: Chapter 4 </span>(2023) </h1>
        <div className="sub-info">
            <span><span className="box-visible">R</span></span>
            <span>03/24/2023 (US)</span>
            <span>•</span>
            <span><a href="/">Action</a>,<a href="/">Thriller</a>,<a href="/">Crime</a></span>
            <span>•</span>
            <span>2h 50m</span>
        </div>
        <div className="btns">
            <span className="btn-round"><FormatListBulletedIcon /></span>
            <span className="btn-round"><FavoriteIcon /></span>
            <span className="btn-round"><BookmarkIcon /></span>
            <span className="btn-round"><StarIcon /></span>
            <span className='play'><PlayArrowIcon/>
            <span><a href="/">Play Trailer</a></span>
            </span>
        </div>
        <div className="subtitle">
            No way back, one way out.
        </div>
        <div className="overview">
            Overview
        </div>
        <div className="description">
        With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.
        </div>
        <div>
        <div className="char-info">        
        <div>
            <div className="char-info-head">
            Derek Kolstad
            </div>
            <div>
            Characters
            </div>
        </div>
        <div>
            <div className="char-info-head">
            Chad Stahelski
            </div>
            <div>
            Director
            </div>
        </div>
        <div>
            <div className="char-info-head">
            Shay Hatten
            </div>
            <div>
            Writer
            </div>
        </div>
        <div>
            <div className="char-info-head">
            Michael Finch
            </div>
            <div>
            Writer
            </div>
        </div>
        </div>
            
            
        </div>
    </div>
    
      

       
        
    </div>
    </div>
    </div>
    </div>
}
export default Banner;