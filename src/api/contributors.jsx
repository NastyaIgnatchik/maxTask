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



