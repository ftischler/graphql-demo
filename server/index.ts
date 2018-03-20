import * as express from 'express';

import { Application } from 'express';
import { join } from 'path';

const port: string | number = process.env.PORT || 3000;

const app: Application = express();

app.use('/', express.static(join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
