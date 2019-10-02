import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import routeEntry from './routes';
import throwAPIError from './middleware/throwAPIError';
import errorHandler from './middleware/errorHandler';

const app = express();
export const validRoutes = {
  apiURI: '/api',
};

app.use(logger);

app.use(bodyParser.json());

app.use(validRoutes.apiURI, routeEntry);

app.use(throwAPIError(404, 'Endpoint not found', `Endpoint not found. Valid URI ${JSON.stringify(validRoutes)}`));

app.use(errorHandler);

export default app;