import React from 'react'

const Article = ({ section, title, abstract, byline, image }) => {
  return (
    <article>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
      <p>{section}</p>
    </article>
  )
}

export default Article