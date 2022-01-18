import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import ArtistPage from './pages/ArtistPage/ArtistPage';
import AlbumPage from './pages/AlbumPage/AlbumPage';
import SearchPage from './pages/SearchPage/SearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
        <h3>
            Home
        </h3>
        </Link>
        <Link to="/favorite">
        <h3>
            Favorites
        </h3>
        </Link>
        <Link to="/search">
        <h3>
            Search
        </h3>
        </Link>
      </header>
      <Switch>
        <Route path="/album/:id">
          <AlbumPage/>  
        </Route>
        <Route path="/favorite">
          <FavoritePage/>
        </Route>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/">
          <ArtistPage/>
        </Route>
      </Switch>
      <footer>
            <h3>&copy;2021, SpotifyDupe</h3>   
            <p>LC036</p>
        </footer>
    </Router>
  ) 
}

export default App;
