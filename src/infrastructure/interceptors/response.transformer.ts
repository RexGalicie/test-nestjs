import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const [req] = context.getArgs()
    // if filters return filters, paginations, sorting ...
    return next.handle().pipe(map(data => ({ _meta: { request_id: req.id,  date: new Date() }, data })));
  }
}