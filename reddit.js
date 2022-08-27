const axios = require("axios");

module.exports = function (app) {
  let object = [];
  //route to get reddit posts [upto 98]
  app.get("/reddit", async (req, res) => {
    let SUB = req.query.SUB;
    let POST = req.query.POST;
    const check = checkPost(POST);
    console.log(SUB, POST);

    if (check === 1) {
      //
      let resp = await axios.get(
        `https://www.reddit.com/r/${SUB}.json?limit=${POST}`
      );
      let data = resp.data;

      const lastData = setData(data, POST);

      res.send(lastData[0]);
      // res.send("Hello World! ");
    } else {
      res.send(
        "Can't access more than 50 posts at a time. To much pressure you know"
      );
    }
  });

  //other routes..
};

function checkPost(POST) {
  if (POST > 50) {
    return 0;
  } else {
    return 1;
  }
}

function setData(data, POST) {
  let obj = [];
  for (let i = 0; i <= POST; i++) {
    obj[i] = data.data.children[i + 1];
  }
  return obj;
}
