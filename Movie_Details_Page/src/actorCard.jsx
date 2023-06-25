import React from 'react'
import './actorCard.css'

function ActorCard({title,subtitle,cover}) {
    
  return (
    <div className='actorName'>      
   <img src={cover}  alt="cover"/>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  )
}

export default ActorCard
