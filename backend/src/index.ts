import express from 'express';

require('dotenv');
require('dotenv-expand');

const PORT = +(process.env?.PORT ?? 3001);
const app = express();

app.listen(PORT, () => {
  console.log(`Server are running @ port ${PORT} `);
});
