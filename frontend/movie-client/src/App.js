import logo from './logo.svg';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  const [movies, setMovies] = useState();

  constGetMovies = async () => {
    const response = await api.get('/movies');
    setMovies(response.data);
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
