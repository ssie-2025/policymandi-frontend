import React from 'react'
import './Heading.css'

function Heading({subTitle,title}) {
  return (
     <div className='title'>
  <h2>{title}</h2>
  <hr className="heading-hr" />
  <p>{subTitle}</p>
    </div>
  )
}

export default Heading
