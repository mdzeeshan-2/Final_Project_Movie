import MovieCard from "./movieCard";
import tmdb from "../api/tmdb"
import "./MovieCard.css"
import { useEffect, useState } from "react";
import { request } from "../request";
import Blur from "../Blur/blur";

const MovieList=({fetch})=>{
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
        return <MovieCard key={index}{...movie}/>
    })}
    <div className="Blur">
        <Blur />
    </div>
    
    </div>

}
export default MovieList;