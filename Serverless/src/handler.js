'use strict';
import { getDataApi, myHeaders } from '../services/fetchDataApi.js';

export async function index() {
  const rta = await getDataApi();
 
  return {
    statusCode: 200,
    headers: myHeaders,
    body: JSON.stringify({
      message: rta,
      response: 'OK',
    }),
  };

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'bd05e0d471msh7ec8334312fa389p1bf0f6jsn1be1d32fe181',
  //     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  //   },
  // };
  // const URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  // const myHeaders = {
  //   'Access-Control-Allow-Origin': 'http://localhost:5173',
  //   'Access-Control-Allow-Credentials': true,
  //   'Access-Control-Allow-Methods': 'GET',
  // };

  // try {
  //   const response = await axios.get(URL, options);
  //   const data = response.data;

  //   return {
  //     statusCode: 200,
  //     headers: myHeaders,
  //     body: JSON.stringify({
  //       message: data,
  //     }),
  //   };
  // } catch (error) {
  //   return {
  //     statusCode: 400,
  //     // configuracion cors
  //     headers: myHeaders,
  //     body: JSON.stringify({
  //       message: `${error}`,
  //     }),
  //   };
  // }
}
