import { inspect } from 'node:util';

export const logDeepObject = (object: unknown): void => console.log(inspect(object, { depth: null, colors: true }));
