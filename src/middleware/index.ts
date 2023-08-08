import { sequence } from "astro/middleware";

import { titleMiddleware } from './title';
import { orderMiddleware } from './order';

export const onRequest = sequence(titleMiddleware, orderMiddleware);