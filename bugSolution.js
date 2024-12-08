const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Ensure app.listen is called only once
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});