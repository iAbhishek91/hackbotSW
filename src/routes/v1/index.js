import { Router } from 'express';
import watsonAssistantRoute from './watsonAssistantRoute';
import errorHandler from '../../middleware/errorHandler';
import throwAPIError from '../../middleware/throwAPIError';

const v1RouteEntry = Router();
const validRoutes = {
  watsonAssistant: {
    method: 'POST',
    URI: '/watsonAssistant',
  },
};

v1RouteEntry.use(validRoutes.watsonAssistant.URI, watsonAssistantRoute);

v1RouteEntry.use(throwAPIError(404, 'Endpoint not found', `Endpoint not found. Valid URI ${JSON.stringify(validRoutes)}`));

v1RouteEntry.use(errorHandler);

export default v1RouteEntry;
