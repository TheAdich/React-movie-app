import React from "react";
import './MovieList.css';
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import axios from "axios";
const MovieList=()=>{
    const [movieList,setMovieList]=useState([]);
    const {types}=useParams();
    useEffect(()=>{
        async function showData(){
            const response=await axios.get(`https://api.themoviedb.org/3/movie/${types?types:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
            setMovieList(response.data.results);
            console.log(response.data.results);
        }
        showData();
    },[]);

    useEffect(()=>{
        async function showData(){
            const response=await axios.get(`https://api.themoviedb.org/3/movie/${types?types:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
            setMovieList(response.data.results);
            console.log(response.data.results);
        }
        showData();
    },[types]);



    return(
        <div className="Movie-category-page">
            <h1 className="movie-category-page-name">{types}</h1>
            {
               <div className="movie-items-block">
                    {
                        movieList.map(movie=>(
                            <Card movie={movie?movie:""}></Card>
                        ))
                    }
               </div>
            }
        </div>
    )
};

export default MovieList;