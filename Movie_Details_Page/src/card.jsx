import "./card.css"

const StarCard = ({title, imageURL, body})=>{
return (<div className="card-container">
   <div className="image_container" >
   <div
   className="bg-holder"
   style={{
    backgroundImage:`url(${imageURL})`,
    height: '400px',  
    backgroundPosition: 'center',
    backgroundSize:'cover'
    ,backgroundRepeat:'no-repeat'    
    
   }}
   >
    
   </div>

   <div className="side side-content-center">
          
            <p>Now Streaming</p>
            <p className="watch">Watch Now</p>
          
        </div>
        </div>
</div>)
}
export default StarCard;