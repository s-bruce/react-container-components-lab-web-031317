import React from 'react'
import MovieReviews from './MovieReviews'
import 'whatwg-fetch'

class LatestMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=703b74891eeb4e48b546e14ffe8d5157')
    .then(res => res.json() )
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return(
      <div className='latest-movie-reviews'>
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default LatestMovieReviewsContainer
