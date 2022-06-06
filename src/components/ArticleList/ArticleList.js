import { useState, useEffect } from 'react'
import fetchArticles from '../../apiCalls'
import Article from '../Article/Article'

const ArticleList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchArticles().then(data => setList(data.results))
  }, [])

  // useEffect(() => {
  //   console.log(list)
  // }, [list])

  const articles = list.map(article => <Article key={article.uri} />)
  
  return (
    <div>
      {articles}
    </div>
  )
}

export default ArticleList