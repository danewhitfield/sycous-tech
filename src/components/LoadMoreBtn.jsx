import React from 'react'

const LoadMoreBtn = ({filter, setVisible, setFilterVisible}) => {
  const loadMore = () => {
      filter === 'none' ? setVisible(prev => prev + 3) : setFilterVisible(prev => prev + 3)
  }

  return (
    <button onClick={loadMore}>Load More</button>
  )
}

export default LoadMoreBtn