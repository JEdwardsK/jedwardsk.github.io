import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FeaturedPage = () => {
  return (
    <>
      <div className="featured-container">
        <div className="featured-header">
          <FontAwesomeIcon icon={ faMailBulk }/>
          <p>News</p>
        </div>
        <hr />
        <div className="featured-body"></div>
        <hr />
        <div className="featured-footer"></div>
      </div>
    </>
  )
}

export default FeaturedPage
