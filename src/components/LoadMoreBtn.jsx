import React from 'react'
import { StyledLoadMoreBtn } from '../styles/LoadMoreBtn.style'

const LoadMoreBtn = ({filter, setVisible, setFilterVisible}) => {
  const loadMore = () => {
      filter === 'none' ? setVisible(prev => prev + 3) : setFilterVisible(prev => prev + 3)
  }

  return (
    <StyledLoadMoreBtn onClick={loadMore}>Load More</StyledLoadMoreBtn>
  )
}

export default LoadMoreBtn