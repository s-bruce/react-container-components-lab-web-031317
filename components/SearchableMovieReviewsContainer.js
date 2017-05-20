import React from 'react'
import MovieReviews from './MovieReviews'
import 'whatwg-fetch'

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      query: ""
    }
  }

  handleInputChange(e){
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=703b74891eeb4e48b546e14ffe8d5157&query=".concat(this.state.query)

    fetch(url)
    .then(res => res.json() )
    .then(data => this.setState({reviews: data.results}))

    this.setState({ query: "" })
  }

  render() {
    console.log(this.state.query)
    console.log(this.state.reviews)
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>Search for a Review</h1>
          <input type="text" value={this.state.query} onChange={this.handleInputChange.bind(this)} />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
