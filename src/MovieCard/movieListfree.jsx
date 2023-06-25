import MovieCardFree from "./movieCardFree"
import tmdb from "../api/tmdb"
import "./MovieCard.css"
import { useEffect, useState } from "react";
import { request } from "../request";
import Blur from "../Blur/blur";

const MovieListFree=({fetch})=>{
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const fetchMovies=async()=>{
            const {data} = await tmdb.get(request[fetch])
            setMovies(data.results)
        }
        fetchMovies()
    },[fetch])


    return <div className="Mlist">
    {movies.map((movie, index)=>{
        return <MovieCardFree key={index}{...movie}/>
    })}
    <div className="Blur">
        <Blur />
    </div>
    
    </div>

}
export default MovieListFree;