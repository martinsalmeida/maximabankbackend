import { prisma } from '../../../../database/prismaCliente';

interface IBalanceUser {
  login: string;
}

export class GetBalanceUserUseCase {
  async execute({ login }: IBalanceUser) {
    const userBalance = await prisma.balance.findUnique({
      where: {
        login,
      },
      select: {
        balance: true,
      },
    });

    return userBalance;
  }
}
