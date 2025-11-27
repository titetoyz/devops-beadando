const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello DevOps! Ez egy feature branch üzenet. Made by Balom Soma - T3JIXF ');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
