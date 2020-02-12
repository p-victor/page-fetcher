const args = process.argv.splice(2);
const url = args[0] ? args[0] : '';
const path = args[1] ? args[1] : './file.html';
const request = require('request')
const fs = require('fs');

request(url, (error, response, body) => {
  if (response) {
    console.log(`Downloaded and saved ${response.socket.bytesRead} bytes to ${path}`);
    fs.writeFile(path, body, (e) => { if (e) { console.log(e.message) }; });
  } else {
    console.log(`Failed  to download the file.`);
  }
});
