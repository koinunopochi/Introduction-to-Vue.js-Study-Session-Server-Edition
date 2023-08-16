const express = require('express');
const app = express();

const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/api/time', (req, res) => {
  console.log(req.body);
  const text = req.body.text;
  const time = new Date();
  res.json({ text: text, time: time });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
