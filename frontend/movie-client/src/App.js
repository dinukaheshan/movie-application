import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    }
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<Home movies={movies} />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
