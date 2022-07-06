import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface iPayload {
  sub: string;
}

export async function authenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token inexistente',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      process.env.USER_SECRET || 'default'
    ) as iPayload;

    request.login = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Token inválido',
    });
  }
}
