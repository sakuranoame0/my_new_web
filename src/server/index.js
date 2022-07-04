var request = require("request");

var options = {
  url: "https://www.sejuku.net/blog/sample",
  method: "POST",
  form: { name: "太郎" }
};

request(options, function (error, response, body) {
  console.log(body);
});
