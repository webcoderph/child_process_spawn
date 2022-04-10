const { spawn } = require('child_process')
const fs = require('fs');

let writeStream = fs.createWriteStream('json.txt');
let json = []

for(i=1; i<=100000; i++) {
   json.push({id: i, data: [Array.from(Array(10).keys())]})
}

writeStream.write(JSON.stringify(json));

writeStream.on('finish', () => {
    console.log('wrote all data to file');
});

writeStream.end();

const ls = spawn('node', ['worker']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});