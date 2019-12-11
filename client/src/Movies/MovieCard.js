import React from 'react';
import axios from 'axios';

const MovieCard = ({ movieCardData }) => {

  const { title, director, metascore, stars } = movieCardData;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  )

  // const GetMovie = props => {
  //   const [movies, setMovies] = useState([])
  //   useEffect(() => {
  //     const getMovies = () => {
  //       axios
  //         .get('http://localhost:5000/api/movies')
  //         .then(response => {
  //           // console.log(response.data);
  //           setMovies(response.data);
  //         })
  //         .catch(error => {
  //           console.error('Server Error', error);
  //         });
  //     }
  //     getMovies();
  //   }, []);
  // }
  // return (
  //   <MovieCard />
  // )
}


// return (
//   <div className="movie-list">
//     {movies.map(movie => (
//       <MovieDetails key={movie.id} movie={movie} />
//     ))}
//   </div>
// );
// }

// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );
// }









// function MovieCard({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );


// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );
// }

export default MovieCard;