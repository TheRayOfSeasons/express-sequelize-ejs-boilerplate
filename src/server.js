import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import router from './routes/index';

dotenv.config();

const PORT = process.env.PORT || 5000;

const filename = fileURLToPath(import.meta.url);
const directoryName = dirname(filename);

async function bootstrap() {
  const app = express();

  // middleware
  app.use(helmet());
  app.set('view engine', 'ejs');
  app.set('views', path.join(directoryName, '/views'));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));

  // routes
  app.use(router);

  // eslint-disable-next-line no-console
  app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
}

bootstrap();
