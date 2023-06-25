import "./Scroll.css"
import ActorCard from "./actorCard.jsx";
import {data} from './data'
const ScrollCard = ()=>{

return(<div>
<h1 className="billed">Top Billed Cast</h1>
<div class="cards-wrapper">
{/* <ActorCard /> */}
    
    {
      data.map((single,index)=>{
        return <ActorCard key={index} title={single.title} subtitle={single.subtitle} cover={single.cover} />
      })
    }
  
    {/* <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
    <div class="card">Card 5</div>
    <div class="card">Card 6</div>
    <div class="card">Card 7</div>
    <div class="card">Card 9</div>
    <div class="card">Card 9</div>
    <div class="card">Card 10</div> */}
  </div>
</div>
)
}
export default ScrollCard;