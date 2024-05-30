import axios from "axios";

const SWDBApi = {
  /**
   * API call to SWDB to get all characters
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
  * API call to SWDB to get all Planets
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
  * API call to SWDB to get all StarShips
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
  * API call to SWDB to get all vehicles
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
  * API call to SWDB to get all movies
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

/**
   * API call to SWDB to get a searched character
  */ 
getSearchedCharacters: async (name) => {
  try {
    const url = `https://starwars-databank-server.vercel.app/api/v1/characters/name/${name}`;
    const response = await axios.get(url);
    if (response.data.length > 0) {
      const { description, image } = response.data[0];
      return { description, image };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching characters:", error);
    return null;
  }
},

/**
* API call to SWDB to get a searched Planets
*/ 
getSearchedPlanets: async (name) => {
  try {
    const url = `https://starwars-databank-server.vercel.app/api/v1/locations/name/${name}`;
    const response = await axios.get(url);
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching planets:", error);
    return null;
  }
},


/**
* API call to SWDB to get a searched StarShips
*/ 
getSearchedDroids: async (name) => {
  try {
    const url = `https://starwars-databank-server.vercel.app/api/v1/droids/name/${name}`;
    const response = await axios.get(url);
    if (response.data.length > 0) {
      return response.data[0]; 
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching droids:", error);
    return null;
  }
},


/**
* API call to SWDB to get a searched vehicles
*/ 
getSearchedVehicles: async (name) => {
  try {
    const url = `https://starwars-databank-server.vercel.app/api/v1/vehicles/name/${name}`;
    const response = await axios.get(url);
    if (response.data.length > 0) {
      return response.data[0]; 
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return null;
  }
},


/**
* API call to SWDB to get a searched movies
*/ 
getSearchedOrganizations: async (name) => {
  try {
    const url = `https://starwars-databank-server.vercel.app/api/v1/organizations/name/${name}`;
    const response = await axios.get(url);
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return null;
  }
},
};

export { SWDBApi };
