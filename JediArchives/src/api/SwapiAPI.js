import axios from "axios";

const swapiApi = {
  /**
   * API call to Swapi to get all characters
  */ 
  getAllCharacters: async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  },

  /**
  * API call to Swapi to get a specific character by url
  */ 
  getRequestByURL: async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching character:", error);
      return null;
    }
  }
};

export { swapiApi }; 
