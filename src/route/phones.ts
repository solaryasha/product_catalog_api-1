import express, { Router } from 'express';

import { phoneController } from '../controllers/phones';

export const phoneRouter = Router();

phoneRouter.get('/', express.json(), phoneController.getPhones);
