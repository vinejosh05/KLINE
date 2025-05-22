const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Message received from ${name} (${email}): ${message}`);
  res.send('Thank you for contacting KLINE!');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
