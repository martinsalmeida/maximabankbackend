import { prisma } from "../../../../database/prismaCliente";

interface ICreateTransaction {
  login_origin: string;
  login_destination: string;
  transaction_value: number;
}

export class CreateTransactionUseCase {
  async execute({
    login_origin,
    login_destination,
    transaction_value,
  }: ICreateTransaction) {
    const loginOrigin = await prisma.balance.findFirst({
      where: {
        login: login_origin,
      },
    });

    if (!loginOrigin) {
      throw new Error("Usuário inválido");
    }

    const loginDestination = await prisma.balance.findFirst({
      where: {
        login: login_destination,
      },
    });

    if (!loginDestination) {
      throw new Error("Usuário inválido para fazer a transferência");
    }

    if (transaction_value > loginOrigin.balance || loginOrigin.balance < 0) {
      throw new Error("Você não possui saldo suficiente para essa transação");
    }

    let valueDestination = transaction_value + loginDestination.balance;
    let valueOrigin = loginOrigin.balance - transaction_value;

    await prisma.balance.update({
      where: {
        login: login_origin,
      },
      data: {
        balance: valueOrigin,
      },
    });

    await prisma.balance.update({
      where: {
        login: login_destination,
      },
      data: {
        balance: valueDestination,
      },
    });

    const result = await prisma.transaction.create({
      data: {
        login_origin,
        login_destination,
        transaction_value,
      },
    });

    return result;
  }
}
