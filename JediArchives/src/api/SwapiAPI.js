import { axios } from "@pipedream/platform"

export default defineComponent({
  props: {
    swapi: {
      type: "app",
      app: "swapi",
    }
  },
  methods: {
    async getAllCharacters($) {
      const response = await axios($, {
        url: `https://swapi.dev/api/people/`,
      });
      return response.results;
    },
    async getCharacterById($, id) {
      const response = await axios($, {
        url: `https://swapi.dev/api/people/${id}/`,
      });
      return response;
    },
  },
})
