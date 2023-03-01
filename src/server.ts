import express from 'express';
import { phoneRouter } from './route/phones';

export interface Phone {
  id: number,
  category: string,
  phoneId: string,
  itemId: string,
  name: string,
  fullPrice: number,
  price: number,
  screen: string,
  capacity: string,
  color: string,
  ram: string,
  year: number,
  image: string,
}

const PORT = 5000;

const app = express();

app.use('/phones', phoneRouter);

// app.get('/users/:userId', (request, response) => {
// });

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});
