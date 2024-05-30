import axios from "axios";

const swapiApi = {
  /**
   * API call to Swapi to get all characters
  */ 
  getAllCharacters: async (page) => {
    try {
      const url = `https://starwars-databank-server.vercel.app/api/v1/characters?page=${page}&limit=20`;
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
    getAllPlanets: async (page) => {
      try {
        let url = `https://starwars-databank-server.vercel.app/api/v1/locations?page=${page}&limit=20`;    
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
  getAllDroids: async (page) => {
    try {
      let url = `https://starwars-databank-server.vercel.app/api/v1/droids?page=${page}&limit=20`;
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
    getAllVehicles: async (page) => {
      try {
        let url = `https://starwars-databank-server.vercel.app/api/v1/vehicles?page=${page}&limit=20`;
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
  getAllOrganizations: async (page) => {
    try {
      let url = `https://starwars-databank-server.vercel.app/api/v1/organizations?page=${page}&limit=20`;
      const response = await axios.get(url);
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching Organizations", error);
      return [];
    }
  },
};

export { swapiApi }; 
