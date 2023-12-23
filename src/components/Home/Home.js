import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';
import MovieList from "../MovieList/MovieList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        async function showData() {
            const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
            setMovieList(response.data.results);
            console.log(response.data.results);
        }
        showData();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed:3000,
        autoplay:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
       
            <div className="poster">
            <Slider {...settings} className="slider-css">
            {
                movieList.map((movie) => (
                    <div className="poster-overlay">
                  
                        <div className="poster-overlay-image">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}></img>
                        </div>

                        <div className="poster-description">
                            <div className="poster-title">
                                {movie ? movie.title : ""}
                            </div>
                            <div className="poster-time-rating">
                                {movie ? movie.release_date + " || " : ""}
                                <span>{movie ? movie.vote_average : ""}
                                    <i className="fas fa-star" />{" "}
                                </span>

                            </div>
                            <div className="poster-overview">
                                {movie ? movie.overview : ""}
                            </div>
                        </div>
                    </div>
                ))
            }
            </Slider>
                    
               
                <MovieList></MovieList>
               
            </div>

       
    )
};

export default Home;
