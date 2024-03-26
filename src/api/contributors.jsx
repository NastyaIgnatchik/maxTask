import axios from "axios";

const token = "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"

const userInstance = axios.create({
  headers: {
    "Authorization": `token ${token}`
  }
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
      return userInstance.get(`https://api.github.com/users/${login}`);
    } catch (error) {
      console.log(error);
    }
  },
};



