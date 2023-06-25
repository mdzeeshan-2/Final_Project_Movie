import "./banner.css"
import { useRef } from "react";
import SearchInput from "../Search/SearchInput";
import SearchButton from "../Search/SearchButton";
const Banner = () =>{
    const SearchInputRef = useRef();
    const handleSearch = () =>{
        alert(`you types ${SearchInputRef.current.value}`)
    }
    const handleKeyDown = (event) =>{
        if(event.key==="Enter"){
         handleSearch();
        }
    }
    return <div className="banner">
    <div className="heading_banner">
    <div className="head_head_banner">
        <h2 className="text_banner">Welcome.</h2>
        <h3 className="subtext_banner">Millions of movies, TV shows and people to discover. Explore now.</h3>
    </div> 
    <div className="parent_container">
        <SearchInput ref={SearchInputRef} onKeyDown={handleKeyDown}/>
        <div className="child_container"> 
        <SearchButton onClick={handleSearch}/>
        </div>
    </div>
    </div>
    </div>
}
export default Banner;