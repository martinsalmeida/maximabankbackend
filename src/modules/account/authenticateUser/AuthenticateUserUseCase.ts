import { prisma } from '../../../database/prismaCliente';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUser {
  login: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ login, password }: IAuthenticateUser) {
    const user = await prisma.user.findFirst({
      where: {
        login,
      },
    });

    if (!user) {
      throw new Error('Usuário ou senha incorretos');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Usuário ou senha incorretos');
    }

    const { name } = user;

    const token = sign({ login, name }, process.env.USER_SECRET || 'default', {
      subject: user.login,
      expiresIn: '1h',
    });

    return { user: { name, login }, token };
  }
}
