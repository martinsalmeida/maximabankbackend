import { prisma } from '../../../../database/prismaCliente';

interface IListUserTransaction {
  login: string;
}

export class FindAllUserTransactionUseCase {
  async execute({ login }: IListUserTransaction) {
    const userTransactions = await prisma.transaction.findMany({
      where: {
        OR: [
          {
            login_origin: login,
          },

          {
            login_destination: login,
          },
        ],
      },
    });

    return userTransactions;
  }
}
