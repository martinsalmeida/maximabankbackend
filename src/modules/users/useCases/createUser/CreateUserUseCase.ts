import { prisma } from '../../../../database/prismaCliente';
import { hash } from 'bcrypt';

interface ICreateUser {
  name: string;
  login: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, login, password }: ICreateUser) {
    if (login == '' || password == '') {
      throw new Error('Email e a senha são obrigatórios');
    }

    const userExist = await prisma.user.findFirst({
      where: {
        login,
      },
    });

    if (userExist) {
      throw new Error('Email já cadastrado');
    }

    const loginToLowerCase = login.toLowerCase().trim();

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        login: loginToLowerCase,
        password: hashPassword,
        balance: {
          connectOrCreate: {
            where: {
              login: login,
            },
            create: {
              login: login,
            },
          },
        },
      },
      select: {
        name: true,
        login: true,
      },
    });

    return user;
  }
}
