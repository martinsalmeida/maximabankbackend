import { Request, Response } from "express";
import { FindAllUserTransactionUseCase } from "./FindAllUserTransactionUseCase";

export class FindAllUserTransactionController {
  async handle(request: Request, response: Response) {
    const findAllUserTransactionUseCase = new FindAllUserTransactionUseCase();

    const { login } = request;

    const result = await findAllUserTransactionUseCase.execute({
      login,
    });

    return response.json(result);
  }
}
