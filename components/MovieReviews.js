import React from 'react'

function MovieReviews(props){
  const els = props.reviews.map((review, i) => {
    return (
      <div className="review" key={i}>
        <h3>"{review.display_title}"</h3>
        <ul>
          <li>Reviewed by: {review.byline}</li>
          <li>Summary: {review.summary_short}</li>
          <li><a href={review.link.url} target="_blank">Click here to read the full review!</a></li>
          {review.critics_pick === 1 &&
            <li><i>New York Times Critic's Pick</i></li>
          }
        </ul>
      </div>
    )
  })

  return(
    <div className="review-list">
      {els}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
