import { Router } from 'express';
import createUserValidation from '../validation/createValidation';
import { createUser }from '../controllers/userController';

const router = Router();
router.post('/api/v1/create-user', createUserValidation, createUser );

export default router;
