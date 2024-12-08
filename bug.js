const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Error: app.listen() is called multiple times. This will lead to unexpected behavior.
//Solution: Ensure app.listen() is called only once.