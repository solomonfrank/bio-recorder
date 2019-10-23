import { Router } from 'express';
import { createUserValidation, validateUserId } from '../validation/createValidation';
import { createUser, editUser, deleteUser, fetchAllUsers }from '../controllers/userController';

const router = Router();
router.post('/api/v1/user/create', createUserValidation, createUser );
router.put('/api/v1/user/edit/:userId', validateUserId, editUser);
router.delete('/api/v1/user/delete/:userId', validateUserId, deleteUser);
router.get('/api/v1/users', fetchAllUsers);

export default router;
 