import express from 'express';
import { userController } from './controller.js';
const route = express.Router();
route.get('/users', userController.getAll);
route.get('/users/:id', userController.getUserById);
route.get('/customers', userController.getCustomers);
route.get('/customers/:name', userController.getCustomerIdByName);
route.get('/roles', userController.getRoles);
route.get('/roles/:name', userController.getRoleKeyByName);
route.post('/users', userController.createUser);
route.put('/users/:id', userController.updateUser);
route.delete('/users/:id', userController.deleteUser);
export default route;
//# sourceMappingURL=route.js.map