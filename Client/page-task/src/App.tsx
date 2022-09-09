import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import './App.css';
import { FavoriteGames } from './components/Favorite';
import Prueba from './components/Prueba';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='favoriteGames' element={<FavoriteGames />}>
            <Route path='OtroEnlace' element={<Prueba />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
