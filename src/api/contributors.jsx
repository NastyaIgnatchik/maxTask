import axios from "axios";

const userInstance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {},
});
export const githubServices = {
  async getContributors() {
    try {
      return await userInstance.get(
        "repos/koreyspace/generative-ai-for-beginners/contributors"
      );
    } catch (error) {
      console.log(error);
    }
  },

  async getUsersName(login) {
    try {
      return userInstance.get(`users/${login}`, {});
    } catch (error) {
      console.log(error);
    }
  },
  async getUsersEmail(login) {
    try {
      return userInstance.get(`users/${login}`, {
        headers: { Authorization: "Bearer " + process.env.REACT_APP_TOKEN },
      });
    } catch (error) {
      console.log(error);
    }
  },
};



