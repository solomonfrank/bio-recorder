import express from 'express';
import { PORT } from './constant';
import bodyParser from 'body-parser';
import router from './routes';
import cors from 'cors';
import { respondWithWarning, respondWithSuccess } from './helpers/responseHandler';

const app = express();
const port = PORT || 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());
app.get('/', async (req, res) => respondWithSuccess(res, 200, 'welcome'));

app.use(router);
app.all('*', (req, res) => respondWithWarning(res, 404, 'route not found'));

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})