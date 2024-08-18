import './MovieList.css';
const MovieListHeading =(props)=>{
  return(  
      <div className="header">
        <h1> { props.heading }  </h1>
    </div>
  );
};
export default MovieListHeading;