import axios from "axios";

const swapiApi = {
  getAllCharacters: async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  },

  getCharacterById: async (id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching character:", error);
      return null;
    }
  }
};

export { swapiApi }; 
