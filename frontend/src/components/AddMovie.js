import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { gql, useMutation } from '@apollo/client';

const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`

const addNewMovie = gql`
  mutation AddNewMovie($name: String!, $genre: String!, $year: String!) {
    addMovie(name: $name, genre: $genre, year: $year) {
      name
      genre
      year
    }
  }
`

const AddMovie = () => {
  const submitMovie = (e) => {
    e.preventDefault()
    newMovieData({
      variables: {
        name: movieName,
        genre: movieGenre,
        year: movieYear
      },
      refetchQueries: [{
        query: listAllMovies
      }]
    })
  }

  const [movieName, setMovieName] = useState('')
  const [movieGenre, setMovieGenre] = useState('')
  const [movieYear, setMovieYear] = useState('')

  const [newMovieData, { loading, error }] = useMutation(addNewMovie);

  if (loading) return <p className='loading'>Submitting your movie...</p>
  if (error) return <p className='error'>Cannot add your movie!: ${error.message}</p>

  return ( 
    <div className='addMovie' id="addNewMovie">
      <form onSubmit={submitMovie}>
        <input type="text" placeholder='Movie Name' required onChange={(e) => setMovieName(e.target.value)}/>
        <input type="text" placeholder='Movie Genre' required onChange={(e) => setMovieGenre(e.target.value)}/>
        <input type="text" placeholder='Movie Year' onChange={(e) => setMovieYear(e.target.value)}/>
        <button>Add Movie</button>
      </form>
      <div className='top'>
        <Link smooth to="#header" className='top-button'>Back to top</Link>
      </div>
    </div>
   );
}
 
export default AddMovie;