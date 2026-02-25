export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY
      
  },
};
export const fetchData = async (URL, options) => {
  const response = await fetch(URL, options);
  const data = await response.json();

  return data;
};
