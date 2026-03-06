export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host":
      "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY
      
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`API ERROR: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};