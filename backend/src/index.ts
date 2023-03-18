import express from 'express';
import root from './utils/root';

require('dotenv');
require('dotenv-expand');

const PORT = +(process.env?.PORT ?? 3001);
const app = express();

app.listen(PORT, () => {
  console.log(`Server are running @ port ${PORT} `);
});

root(app);
