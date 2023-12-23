import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './SearchMovie.css';
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
const SearchMovie = ({ movie }) => {
    const [movieItem, setMovie] = useState([]);

    useEffect(() => {

        async function showData() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.imdbID}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
                console.log(response.data)

                if (response.status === 200) {
                    console.log("Api is successfully called !");
                    setMovie(response.data)
                }


            }
            catch (err) {
                console.log("this movie api is not called")

            }



        }
        showData();
    }, [])
    console.log(movieItem);

    return (
        <React.Fragment>
            {movieItem.original_title !== undefined ? <Link to={`/movie/${movieItem.id}`}>
                <div className="movie-card">
                    <div className="movie-image-container">
                        <img src={`https://image.tmdb.org/t/p/original${movieItem ? movieItem.poster_path : ""}`}></img>
                    </div>

                    <div className="movie-card-details">
                        <div className="movie-title">{movieItem ? movieItem.original_title : ""}</div>
                        <div className="movie-rating-time">{movieItem ? movieItem.release_date + " || " : ""}<span>{movieItem ? movieItem.vote_average + "  " : ""}<i className="fas fa-star" />{" "}</span></div>
                        <div className="details">{movieItem.overview !== undefined ? movieItem.overview.slice(0, 100) + "..." : ""}</div>
                    </div>

                </div>
            </Link> : ""}




        </React.Fragment>
    )
}
export default SearchMovie;