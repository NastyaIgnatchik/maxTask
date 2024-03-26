import axios from "axios";

const userInstance = axios.create({
  headers: {},
});
export const githubServices = {
  async getContributors() {
    try {
      return await userInstance.get(
        "https://api.github.com/repos/koreyspace/generative-ai-for-beginners/contributors"
      );
    } catch (error) {
      console.log(error);
    }
  },

  async getUsers(login) {
    try {
      return userInstance.get(`https://api.github.com/users/${login}`, {
        headers: { Authorization: "Bearer " + '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' },
      });
    } catch (error) {
      console.log(error);
    }
  },
};



