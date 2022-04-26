import React from 'react'

const LoadMoreBtn = ({setVisible}) => {
  const loadMore = () => {
      setVisible(prev => prev + 3)
  }

  return (
    <button onClick={loadMore}>Load More</button>
  )
}

export default LoadMoreBtn