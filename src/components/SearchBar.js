import React from 'react'
import {Link } from 'react-router-dom'

class SearchBar extends React.Component{

    handleFormSubmit = (event) =>{
        event.preventDefault();
    }
    render(){

        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-5">
                    <div className="col-md-10" >
                        <input onChange={this.props.searchMovieProp} 
                         type="text"
                          className="form-control"
                          placeholder="Search a movie" 
                          />
                    </div>
                    <div className="col-md-2">
                    <Link to="/add" className="btn btn-md btn-block btn-success" style={{float:'right'}}>Add</Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;