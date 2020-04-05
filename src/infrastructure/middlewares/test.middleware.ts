import { Request, Response } from 'express';

export function testMiddleware(req: Request, _res: Response, next: () => void): void {
  // tslint:disable-next-line: no-console
  console.log(`Request...`, req.headers);
  next();
};
