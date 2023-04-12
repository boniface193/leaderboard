export const createGame = async (baseURL, user, score) => {
  const request = await fetch(baseURL, { method: 'post', body: JSON.stringify({ user, score }), headers: { 'Content-Type': 'application/json' } });
  const response = request.json();
  return response;
};

export const getGameScore = async (baseURL) => {
  const request = await fetch(baseURL);
  const response = await request.json();
  return response;
};
