import express from 'express';
import fs from 'fs';
import path from 'path';

const PORT = 5000;

const app = express();

app.get('/users', (request, response) => {
  const absolutePath = path.join(__dirname, 'data/phones.json');

  fs.readFile(absolutePath, (error, data) => {
    if (error) {
      console.log(error);

      return;
    }

    response.send(data);
  });
});

app.get('/users/:userId', (request, response) => {
  const { userId } = request.params;

  response.send();
});

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});