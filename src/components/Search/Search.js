import React, { useEffect } from "react";
import { useState } from "react";
import './Search.css';
import axios from 'axios';
import SearchMovie from "../SearchMovie/SearchMovie";
const Search = () => {
    const API_KEY = "a9118a3a";
    const [searchMovie, setMovieName] = useState("");
    const [mList, setMList] = useState([]);
    const [timeoutId, updateTimeoutId] = useState();
   
    const fetchData = async (searchString) => {
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
        );
        setMList(response.data.Search);
    }
    const getMovieName = (e) => {
       
        setMovieName(e.target.value);
        
    }
    const showSearchContent = () => {
        console.log(searchMovie);
        clearTimeout(timeoutId)
        const timeout = setTimeout(() => fetchData(searchMovie), 500);
        updateTimeoutId(timeout);
    }

    







    return (
        <React.Fragment>
            <div className="input-field">
                <input type="text" onChange={getMovieName} value={searchMovie} placeholder="Search Movie by Title"></input>
                <span className="search-icon"><i class='bx bx-search-alt-2' onClick={showSearchContent}></i></span>
            </div>

            <div className="show-Movie-by-search">
                <h2 style={{ textAlign: 'center', marginTop: '5px', fontFamily: "'Poppins', sans-serif" }}>{searchMovie ? "Showing results for  : " + searchMovie : ""}</h2>
            </div>
            <div className="movie-alignment-box">
                <div className="movie-searched-container">
                    {
                        
                        mList && mList.map((movie) => (
                            <SearchMovie movie={movie} key={movie.id}></SearchMovie>
                        ))
                    }

                </div>
            </div>

        </React.Fragment>


    )
}
export default Search;