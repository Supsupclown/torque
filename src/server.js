import express from 'express';

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Torque is running on http://localhost:3000');
});
