import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = (props) =>{

   const truncuteOverview = (string, maxLength) => {
       if(!string) return null;
       if(string.length <= maxLength) return string;
       return `${string.substring(0, maxLength)} ...`;
   }

        return(
            <div className="row">

                {props.movies.map((movie, i) =>

                <div className="col-lg-4" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-top-img" alt="card-top-img-alt" />
                        <div className="card-body">
                            <h5 className="name">{movie.name}</h5>
                            <p className="card-text">{truncuteOverview(movie.overview, 100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="">
                                     <button type="button" className="btn btn-md btn-outline-danger mr-1" onClick={(event) => props.deleteMovieClick(movie)}>Delete</button>

                                    <Link 
                                    to={`edit/${movie.id}`}
                                    type="button" 
                                    className="btn btn-outline-success" 
                                    >Edit</Link>
                                </div>

                                <h2><span className="badge badge-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                )}

            </div>


            
        )
}

export default MovieList;