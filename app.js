'use strict';

const express = require('express');

// Constants
const port = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log('/ reached')
  res.send('Hello World! Deployed on Simplifyd!!!!!!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
