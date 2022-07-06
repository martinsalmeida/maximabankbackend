import { Router } from 'express';
import { authenticateUser } from './middlewares/authenticateUser';
import { AuthenticateUserController } from './modules/account/authenticateUser/AuthenticateUserController';
import { GetBalanceUserController } from './modules/balance/useCases/getBalance/GetBalanceController';
import { CreateTransactionController } from './modules/transaction/useCases/createTransaction/CreateTransactionController';
import { FindAllUserTransactionController } from './modules/transaction/useCases/FindAlltUserTransaction/FindAllUserController';
import { CreateUserController } from './modules/users/useCases/createUser/CreateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createTransactionController = new CreateTransactionController();
const findAllUserTransactiomController = new FindAllUserTransactionController();
const getBalanceUserController = new GetBalanceUserController();

routes.post('/authenticate', authenticateUserController.handle);
routes.post('/user', createUserController.handle);
routes.post(
  '/transaction',
  authenticateUser,
  createTransactionController.handle
);
routes.get(
  '/transactions',
  authenticateUser,
  findAllUserTransactiomController.handle
);

routes.get('/balance', authenticateUser, getBalanceUserController.handle);

export { routes };
