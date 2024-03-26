import axios from "axios";

const token = "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"

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
        headers: { "Authorization": "Bearer " + `${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  },
};



