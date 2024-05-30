import axios from "axios";

const swapiApi = {
  /**
   * API call to Swapi to get all characters
  */ 
  getAllCharacters: async () => {
    try {
      const url = `https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=20`;
      const response = await axios.get(url);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  },

  /**
  * API call to Swapi to get all Planets
  */ 
    getAllPlanets: async () => {
      try {
        let url = `https://starwars-databank-server.vercel.app/api/v1/locations?page=1&limit=20`;    
        const response = await axios.get(url);
        return response.data.data; 
      } catch (error) {
        console.error("Error fetching Planets:", error);
        return [];
      }
    },

  /**
  * API call to Swapi to get all StarShips
  */ 
  getAllDroids: async () => {
    try {
      let url = `https://starwars-databank-server.vercel.app/api/v1/droids?page=1&limit=20`;
      const response = await axios.get(url);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching Droids:", error);
      return [];
    }
  },

  /**
  * API call to Swapi to get all vehicles
  */ 
    getAllVehicles: async () => {
      try {
        let url = `https://starwars-databank-server.vercel.app/api/v1/vehicles?page=1&limit=20`;
        const response = await axios.get(url);
        return response.data.data; 
      } catch (error) {
        console.error("Error fetching Vehicles::", error);
        return [];
      }
    },

  /**
  * API call to Swapi to get all movies
  */ 
  getAllOrganizations: async () => {
    try {
      let url = `https://starwars-databank-server.vercel.app/api/v1/organizations?page=1&limit=20`;
      const response = await axios.get(url);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching Organizations", error);
      return [];
    }
  },
};

export { swapiApi }; 
