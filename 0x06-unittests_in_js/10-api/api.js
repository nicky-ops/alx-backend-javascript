const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  console.log('Receivved body:', req.body);
  const { userName } = req.body || {};
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
     res.status(400).send('Please provide a userName');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
