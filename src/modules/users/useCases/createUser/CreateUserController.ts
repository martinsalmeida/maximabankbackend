import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserUseCase = new CreateUserUseCase();

    const { name, login, password } = request.body;

    const result = await createUserUseCase.execute({ name, login, password });

    return response.status(201).json(result);
  }
}
