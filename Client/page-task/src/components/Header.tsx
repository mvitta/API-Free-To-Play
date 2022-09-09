import '../styles/Header.css';
import { Link } from 'react-router-dom';

export function Header(): JSX.Element {
  const options = [
    { text: 'Juegos', url: '/' },
    { text: 'Mis Juegos Favoritos', url: '/favoriteGames' },
  ];
  return (
    <nav className='header-nav'>
      <section className='nav-section-top'>
        <h1>Mi Pagina web de juegos</h1>
      </section>
      <section className='nav-section-center'>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <Link className='link' to={option.url}>{option.text}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section className='nav-section-bottom'>
        <div className='img-header'>
          <div className='container-description'>
            <div>
              <h1>
                Encuentra los mejores <span>juegos gratis</span>
              </h1>
            </div>
            <div>
              <p>
                Enterate de los actuales juegos que se encuentra disponible en
                modalidad Free to Play
              </p>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
