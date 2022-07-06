import { Request, Response } from 'express';
import { GetBalanceUserUseCase } from './getBalanceUserUseCase';

export class GetBalanceUserController {
  async handle(request: Request, response: Response) {
    const getBalanceUserUseCase = new GetBalanceUserUseCase();

    const { login } = request;

    const result = await getBalanceUserUseCase.execute({
      login,
    });

    return response.json(result);
  }
}
