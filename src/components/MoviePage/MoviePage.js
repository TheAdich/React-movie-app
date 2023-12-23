import React from "react";
import './MoviePage.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const MoviePage = () => {
    const [showMovie, setShowMovie] = useState();
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        async function showData() {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            console.log(response.data);
            setShowMovie(response.data);
        }
        showData();
    }, [])



    return (
        <div className="movie-poster-overlay">
            <div className="movie-poster-background">
                <img src={`https://image.tmdb.org/t/p/original${showMovie && showMovie.backdrop_path}`}></img>
            </div>
            <div className="movie-inside-poster-overlay">
                <div className="movie-poster-small-background">
                    <img src={`https://image.tmdb.org/t/p/original${showMovie ? showMovie.poster_path : ""}`}></img>
                </div>
                <div className="movie-details">
                    <div className="movie-title">
                        {showMovie ? showMovie.original_title : ""}
                    </div>
                    <div className="movie-title-tagline styles">
                        {showMovie ? showMovie.tagline : ""}
                    </div>
                    <div className="movie-rating-votes">
                        {showMovie ? <span className="styles">{showMovie ? showMovie.vote_average + " " : ""}<i className="fas fa-star" />{" "}<span className="styles">{showMovie ? "(" + showMovie.vote_count + ")" : ""}</span></span> : ""}
                    </div>
                    <div className="movie-runtime styles">
                        {showMovie ? showMovie.runtime + " min" : ""}
                    </div>
                    <div className="movie-release_date styles">
                        {showMovie ? "Release date: " + showMovie.release_date : ""}
                    </div>
                    <div className="movie-genre">
                        {
                            showMovie && showMovie.genres ?
                                showMovie.genres.map(item => (
                                    <span className="movie-ind-genre styles genre-btn" value={item.id}>{item.name + " "}</span>
                                ))
                                :
                                ""
                        }
                       
                    </div>
                    <div className="movie-overviews">
                    <h3>Synopsis<br></br></h3>
                    {showMovie ? showMovie.overview : ""}
                </div>
                </div>
            </div>
        </div>
    )
}
export default MoviePage;