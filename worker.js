const fs = require('fs')
const readline = require('readline');
var buf = ''

async function processLineByLine() {
  const fileStream = fs.createReadStream('json.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    buf += line
  }

  let json = JSON.parse(buf)
  for(i in json) {
	  console.log("id", json[i].id)
  }
}

processLineByLine();
