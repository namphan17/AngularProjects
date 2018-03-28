const http = require("http");

let finalResults = ["", "", ""];
let returnedUrl = 0;

let result = "";

function solution(url, target, index) {
  http.get(url, (response) => {
    response.setEncoding("utf8");
    response.on("error", (err) => {
      console.error(err);
    });
    response.on("data", (data) => {
      target[index] = target[index].concat(data);
      // result = result.concat(data);
    });
    response.on("end", () => {
      // target = result;
      // console.log("\nON END finalResult: " + finalResults[index]);
      returnedUrl++;
      if (returnedUrl === 3) {
        finalResults.forEach((item) => {
          console.log(item);
        });
      }
      // console.log("returnedUrl: " + returnedUrl);
      // console.log("Got 3: " + (returnedUrl===3) + "\n--------------------------");
    });
  });
}

solution(process.argv[2], finalResults, 0);
solution(process.argv[3], finalResults, 1);
solution(process.argv[4], finalResults, 2);
