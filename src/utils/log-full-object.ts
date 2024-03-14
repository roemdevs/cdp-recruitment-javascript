import { inspect } from 'node:util';

/**
 * @description Log the entire object passed in parameters
 */
export const logFullObject = (object: unknown): void => console.log(inspect(object, { depth: null }));
