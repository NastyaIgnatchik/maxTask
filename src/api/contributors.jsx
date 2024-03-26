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



