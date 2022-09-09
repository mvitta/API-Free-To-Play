import axios from 'axios';

export const myHeaders = {
  'Access-Control-Allow-Origin': process.env.LOCALHOST,
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET',
};

export async function getDataApi() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
      'X-RapidAPI-Host': process.env.XRAPIDAPIHOST,
    },
  };

  const URL = process.env.APIURL;

  try {
    const response = await axios.get(URL, options);
    const data = response.data;

    return data;
  } catch (error) {
    console.log({ error });
    return [];
  }
}
