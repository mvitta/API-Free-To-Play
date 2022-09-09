import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export function useFetchApi(): IGame[] {
  const [allGames, setAllGames] = useState<IGame[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      try {
        const URL: string = import.meta.env.VITE_URL_AWS;
        const response: AxiosResponse = await axios.get(URL);
        const { data } = response;
        console.log(data);
        
        const { message } = data;
        setAllGames(message);
      } catch (error: any) {
        setError(error);
      }
    }

    fetchData();
  }, []);

  return allGames;
}
