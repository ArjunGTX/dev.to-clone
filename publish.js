// Publish to Patr
// Just create a commit
const fs = require("fs");
const axios = require("axios");
const zipFolder = require("zip-folder");

const generateZip = async () =>
  new Promise((resolve, reject) => {
    zipFolder("./build", "./build.zip", (err) => {
      if (err) {
        reject(error);
      } else {
        resolve("generated build.zip");
      }
    });
  });

const main = async () => {
  try {
    await generateZip();
    const response = await axios.default.post(
      "https://api.patr.cloud/auth/sign-in",
      {
        userId: process.env.USER_ID,
        password: process.env.PASSWORD,
      }
    );
    const accessToken = response.data.accessToken;
    await axios.default.patch(
      `https://api.patr.cloud/workspace/${process.env.WORKSPACE_ID}/infrastructure/static-site/${process.env.STATIC_SITE_ID}`,
      {
        file: fs.readFileSync("./build.zip", "base64"),
      },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

main();
