const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./api/routes');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.json({
  strict: false,
}));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/about', (req, res) => {
  res.send('under construction');
});

app.use(apiRoutes);

app.use((err, req, res) => {
  res.send({
    ok: false,
    error: 'Unexpected server error',
  });
})

app.listen(port);
console.log(`Serving at http://localhost:${port}`);