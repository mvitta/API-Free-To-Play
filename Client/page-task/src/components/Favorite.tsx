import { Link, Outlet } from 'react-router-dom';

export function FavoriteGames() {
  return (
    <div>
      <h1>Aqui van los favoritos</h1>
      <Link className='link' to='OtroEnlace'> Ir a otro link </Link>
      <Outlet />
    </div>
  );
}
