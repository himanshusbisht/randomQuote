import React from 'react'
import  './Card.css'
function Card({quote}) {
  return (
    <>
    <div className="card">
      <div className="quote">
        <p>{quote}</p>
      </div>
      
    </div>
    </>
  )
}

export default Card
