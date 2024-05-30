import axios from "axios";

const swapiApi = {
  /**
   * API call to Swapi to get all characters
  */ 
  getAllCharacters: async () => {
    try {
      let characters = [];
      let url = `https://swapi.dev/api/people/`;
      
      while (url) {
        const response = await axios.get(url);
        characters = characters.concat(response.data.results);
        url = response.data.next; 
      }
      
      return characters;
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
        let planets = [];
        let url = `https://swapi.dev/api/planets/`;
        
        while (url) {
          const response = await axios.get(url);
          planets = planets.concat(response.data.results);
          url = response.data.next;
        }
        
        return planets;
      } catch (error) {
        console.error("Error fetching planets:", error);
        return [];
      }
    },

  /**
  * API call to Swapi to get all StarShips
  */ 
  getAllStarShips: async () => {
    try {
      let starships = [];
      let url = `https://swapi.dev/api/starships/`;
      
      while (url) {
        const response = await axios.get(url);
        starships = starships.concat(response.data.results);
        url = response.data.next;
      }
      
      return starships;
    } catch (error) {
      console.error("Error fetching starships:", error);
      return [];
    }
  },

  /**
  * API call to Swapi to get all vehicles
  */ 
    getAllVehicles: async () => {
      try {
        let vehicles = [];
        let url = `https://swapi.dev/api/vehicles/`;
        
        while (url) {
          const response = await axios.get(url);
          vehicles = vehicles.concat(response.data.results);
          url = response.data.next;
        }
        
        return vehicles;
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        return [];
      }
    },

  /**
  * API call to Swapi to get all movies
  */ 
  getAllMovies: async () => {
    try {
      let movies = [];
      let url = `https://swapi.dev/api/films/`;
      
      while (url) {
        const response = await axios.get(url);
        movies = movies.concat(response.data.results);
        url = response.data.next;
      }
      
      return movies;
    } catch (error) {
      console.error("Error fetching movies:", error);
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
