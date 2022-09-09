export async function getDataDb() {
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Informacion de la base de datos',
    }),
  };
}
