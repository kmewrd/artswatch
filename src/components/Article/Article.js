import React from 'react'
import './Article.css'

const Article = ({ section, title, abstract, byline, image }) => {
  return (
    <article className='list-item'>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
      <p>{section}</p>
    </article>
  )
}

export default Article