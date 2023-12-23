import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
const Menu=()=>{
    return(
        <React.Fragment>
            <div className="navbar">
                <div className="logo">
                    <i class="fas fa-regular fa-film fa-beat"></i>
                    <span>Dev Media</span>
                </div>
        
                <div className="navlinks">
                   <Link className="link" to="/">Home</Link>
                   <Link className="link" to="/movies/upcoming">Upcoming</Link>
                   <Link className="link" to="/movies/popular">Popular</Link>
                   <Link className="link" to="/movies/top_rated">Top Rated</Link>
                   <Link className="link" to="/movies/search">Search</Link>
                </div>
                
            </div>
        </React.Fragment>
    )
};

export default Menu;