import React from "react";
import { useState, useEffect } from "react";
import './Card.css';
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500)
    }, [isLoading])
    return (
        <React.Fragment>

            {isLoading ?
                <div className="movie-card-container">

                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <Skeleton height={"100%"} count={5} />
                    </SkeletonTheme>

                </div> :
                <Link to={`/movie/${movie.id}`}>
                    <div className="movie-card-container">
                        <div className="movie-card-image">
                            <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}></img>
                        </div>
                        <div className="movie-card-details">
                            <div className="movie-card-name">{movie ? movie.title : ""}</div>
                            <div className="movie-rating-time">{movie ? movie.release_date + " || " : ""}<span>{movie ? movie.vote_average + "  " : ""}<i className="fas fa-star" />{" "}</span></div>
                            <div className="movie-overview" >{movie ? movie.overview.slice(0, 120) + "..." : ""}</div>
                        </div>
                    </div>
                </Link>

            }


        </React.Fragment>


    )
}
export default Card;