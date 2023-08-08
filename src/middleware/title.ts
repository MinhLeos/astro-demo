
import { defineMiddleware } from "astro/middleware";

// `context` and `next` are automatically typed
export const titleMiddleware = defineMiddleware(async (context, next) => {
  // console.log('titleMiddleware 1: ', context.locals);
  context.locals.title = "Middleware title";
  context.locals.description = "Middleware description";
  //return next();
  const response = await next();
  // console.log('titleMiddleware 2: ', context.locals);
  if (context.locals.customer.id === '123') {
    // console.log('-----');
    context.locals.name = 'Minh';
  }
  // console.log('titleMiddleware 3: ', context.locals);

  // console.log('context', context.url.pathname);

  return response as Response;
});