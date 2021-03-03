const axios = require("axios");

const URL =
  "https://sv.wikipedia.org/wiki/Stockholms_historiska_krogar,_v%C3%A4rdshus_och_restauranger";
// const URL = "https://stackoverflow.com/questions/6020384/create-array-of-regex-matches";

const visited = [];

function explore(URL, tries) {
  return new Promise(async (resolve, reject) => {
    if (tries < 3) {
      axios
        .get(URL)
        .then(async (response) => {
          const html = response.data;
          let hrefs = html.match(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
          );
          if (hrefs) {
            // console.log(getUnvisitedURLs(hrefs));
            //TODO make sure the are urls
            const newUrls = [];
            for (let index = 0; index < 3; index++) {
              let url = getBaseURL(getUnvisitedURL(hrefs));
              newUrls.push(url);
              visited.push(url);
            }
            resolve(newUrls);
          } else {
          }
        })
        .catch(async (error) => {
          // console.log(error);
          tries++;
          const newUrls = await explore(URL, tries);
          resolve(newUrls);
        });
    } else {
      resolve(["No links found"]);
    }
  });
}

crawl(URL, 0).then((results) => {
  // console.log(JSON.stringify(results[0], null, 4));
  results = {
    URL,
    children: results,
  };
  console.log(JSON.stringify(results, null, 4));
});

async function crawl(URL, level) {
  if (level == 0) visited.push(URL);
  return new Promise(async (resolve, reject) => {
    visited.push(getBaseURL(URL));
    level++;

    const newUrls = await explore(URL, 0);

    if (level == 3) {
      resolve(newUrls);
    } else {
      Promise.all([
        crawl(newUrls[0], level),
        crawl(newUrls[1], level),
        crawl(newUrls[2], level),
      ]).then((promises) => {
        const children = promises[0];
        const children1 = promises[1];
        const children2 = promises[2];

        let tmp = [
          {
            URL: newUrls[0],
            children,
          },
          {
            URL: newUrls[1],
            children: children1,
          },
          {
            URL: newUrls[2],
            children: children2,
          },
        ];
        resolve(tmp);
      });
    }
  });
}

function getBaseURL(URL) {
  if (!URL) return "No url found";
  let orgUrl = URL.split("/");
  return (orgUrl[0] + "//" + orgUrl[2]).split("?")[0].split("#")[0];
}

function getUnvisitedURL(hrefs) {
  return hrefs.filter((href) => !visited.includes(getBaseURL(href)))[0];
}
