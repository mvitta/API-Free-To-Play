import { IGame, useFetchApi } from '../services/useFetch';

export function Home() {
  const allGames: IGame[] = useFetchApi();

  return (
    <div className='App'>
      <section className='container'>
        {allGames.map((game) => (
          <div key={crypto.randomUUID()} className='card'>
            <div>
              <img src={game?.thumbnail} alt={game?.title} />
            </div>
            <div className='title-game'>
              <h3>{game?.title}</h3>
              <span>Free</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
