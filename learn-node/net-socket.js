const net = require("net");

let server = net.createServer((socket) => {
  let output = dateTool();
  socket.end(output + "\n");
});
//
server.listen(process.argv[2]);

function dateTool() {
  let fullDate = "";
  let myDate = new Date();
  let year = myDate.getFullYear();

  let month = myDate.getMonth()+1;
  month = month.length > 1 ? month : '0' + month;

  let date = myDate.getDate();
  date = month.length > 1 ? date : '0' + date;

  let hour = myDate.getHours();
  hour = month.length > 1 ? hour : '0' + hour;

  let min = myDate.getMinutes();
  min = month.length > 1 ? min : '0' + min;
  fullDate = year + "-" + month + "-" + date + " " + hour + ":" + min;
  return fullDate;
}
