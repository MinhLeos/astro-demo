import { defineMiddleware } from "astro/middleware";

export const orderMiddleware = defineMiddleware(async ({ locals }, next) => {
  // intercept response data from a request
  // optionally, transform the response by modifying `locals`
  // console.log('orderMiddleware 1: ', locals);
  locals.name = "John Wick";
  locals.welcomeTitle = () => {
    return "Welcome back " + locals.name;
  };
  locals.customer = { id: '123' };
  // return a Response or the result of calling `next()`
  const response = await next();
  // console.log('orderMiddleware 2: ', locals);
  return response as Response;
});