import { Request, Response } from 'express';
import { CreateTransactionUseCase } from './CreateTransactionUseCase';

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const createTransactionUseCase = new CreateTransactionUseCase();

    const { login_destination, transaction_value } = request.body;

    const { login: login_origin } = request;

    const result = await createTransactionUseCase.execute({
      login_origin,
      login_destination,
      transaction_value,
    });

    return response.json(result);
  }
}
