import { Request, Response, NextFunction } from 'express';
import boom from 'boom';

export function errorMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
    if (boom.isBoom(err)) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    } else {
        res.status(500).json({ error: 'Something went wrong', err });
    }
}
