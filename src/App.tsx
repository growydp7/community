import React from 'react'
import lists from '../mock/lists.json'
import ArticleItem from './components/ArticleItem'
const App = () => {
  return (
    <div>
      {
        lists.data.map((item, index) => <ArticleItem key={index} item={item.item_info} />)
      }
    </div>
  )
}

export default App