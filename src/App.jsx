import React, { useState } from 'react';
import Banner from './Banner/Banner';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Container from './Container/conTainer';
import Section from './Section/section';
import MovieList from './MovieCard/movieList';
import SectionFree from './Section/SectionFree';
import MovieListFree from "./MovieCard/movieListfree";
import SectionPopular from './Section/sectionPopular';
import MovieListPopular from './MovieCard/movieListPopular';
function App() {

  const[sectionToggle, setSectionToggle] = useState({
    first:"Today", 
    second:"Popular",
    third:"Streaming",
    Fourth: "Movies"
  })
  
  const handleToggledValue=(section, SelectedValue)=>{
    setSectionToggle(prev=>({
      ...prev,
      [section]: SelectedValue
    }))
  }
  console.log(sectionToggle)
  return (
    <div className="App">
      <Header />
      <Container> 
      <Banner />
      <Section title="Trending" items={["Today", "This Week"]} onToggle={handleToggledValue.bind(null, 'first')} isToggled={sectionToggle.first==="Today"?false:true}>
        <MovieList  fetch={sectionToggle.first}/>
      </Section>


      <SectionPopular title="What's Popular" items={["Streaming","On Rent"]} onToggle={handleToggledValue.bind(null,'third')} isToggled={sectionToggle.third==="Streaming"?false:true}>
        <MovieListPopular fetch={sectionToggle.third}/>
      </SectionPopular>

      <SectionFree  title="Free To Watch" items={["Movies", "TV"]} onToggle={handleToggledValue.bind(null, 'Fourth')} isToggled={sectionToggle.Fourth==="Movies"?false:true}>
      <MovieListFree  fetch={sectionToggle.Fourth}/>
      </SectionFree>

      </Container>
      <Footer />
    </div>
  );
}

export default App;
