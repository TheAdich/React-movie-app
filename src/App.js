import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Menu from './Menu';
import Home from './components/Home/Home';
import MovieList from './components/MovieList/MovieList';
import MoviePage from './components/MoviePage/MoviePage';
import Search from './components/Search/Search';

function App() {
  return (
    <React.Fragment>
    <Menu></Menu>
    <Routes>
      <Route exact path='/' Component={()=><Home></Home>}></Route>
      <Route path='/movies/:types' Component={()=><MovieList></MovieList>}></Route>
      <Route path='/movie/:id' Component={()=><MoviePage></MoviePage>}></Route>
      <Route path='/movies/search' Component={()=><Search></Search>}></Route>
      
    </Routes>
    </React.Fragment>
  );
}

export default App;
