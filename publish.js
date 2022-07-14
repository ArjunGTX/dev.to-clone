const fs = require("fs");
const exec = require("child_process").execSync;
const axios = require("axios");

async function main() {
  exec("zip -r ../build.zip *", {
    cwd: "./build",
  });
  const response = await axios.default.post(
    "https://api.patr.cloud/auth/login",
    {
      userId: process.env.USER_ID,
      password: process.env.PASSWORD,
    }
  );
  const accessToken = response.data.accessToken;

  await axios.default.patch(
    `https://api.patr.cloud/workspace/${process.env.WORKSPACE_ID}/infrastructure/static-site/${process.env.STATIC_SITE_ID}`,
    {
      file: fs.readFileSync("./build.zip", "base64").toString(),
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
}

main();
