import React from 'react';
import SingleMovie from '../components/SingleMovie';
import { gql, useQuery } from '@apollo/client';

const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`

const Movies = () => {
  const { loading, error, data } = useQuery(listAllMovies)

  if (loading) return <p className='loading'>We are loading your movies...</p>
  if (error) return <p className='error'>Cannot fetch your movies! : {error.message}</p>
  if(data.listMovies.length === 0) return <p className='no-movies'>Please add some movies first</p>

  return ( 
    <div className='movies'>
      {data.listMovies.map((movie, index) => {
        return <SingleMovie
          key={index}
          movieName={movie.name}
          movieGenre={movie.genre}
          movieYear={movie.year}
        />
      })}
    </div>
   );
}
 
export default Movies;