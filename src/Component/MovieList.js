
import './MovieList.css';
const MovieList =(props) =>{
    return(
        <div className='card'>
			{props.movies.map((movie,index) => (
				<div className='poster'>
					<img src={movie.Poster} alt='movie'></img>
				
				     <div className="info"> 
                        <h3> Name : {movie.Title}</h3>
                        <h4> Year : {movie.Year}</h4>
					 </div>
			        </div>
			))}
		</div>
    );


}
export default MovieList;