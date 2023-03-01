import express, {Router} from 'express';

import {phoneController} from '../controllers/phones';

export const phoneRouter = Router();

phoneRouter.get('/', phoneController.getPhones);

phoneRouter.get('/:phoneId', express.json(), phoneController.getOne);
