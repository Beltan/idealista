const axios = require("axios");
const url = require("url");
const config = require("./config");

async function main() {
  const oauthParams = new url.URLSearchParams({
    grant_type: "client_credentials",
  });
  const encoded = Buffer.from(
    `${config.apiKey}:${config.secret}`,
    "utf8"
  ).toString("base64");

  axios
    .post(config.baseUrl + config.oauthRoute, oauthParams.toString(), {
      headers: {
        authorization: `Basic ${encoded}`,
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
    .then((res) => {
      axios
        .post(
          config.baseUrl + config.searchRoute,
          new url.URLSearchParams(config.searchParams).toString(),
          {
            headers: {
              authorization: `Bearer ${res.data.access_token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}

main();
