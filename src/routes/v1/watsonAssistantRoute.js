import { Router } from 'express';
import watsonAssistantController from '../../controllers/v1/watsonAssistant';

const watsonAssistantRoute = Router();

watsonAssistantRoute.post('/', watsonAssistantController);

export default watsonAssistantRoute;