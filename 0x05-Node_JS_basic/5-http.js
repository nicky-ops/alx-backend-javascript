const http = require('http');
const { URL } = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';
const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (reqUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
