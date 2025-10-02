import { inspect } from 'node:util';

/**
 * Logs a deep inspection of an object.
 * @param object The object to inspect.
 */
export const logDeepObject = (object: unknown): void => {
  const env = process.env.NODE_ENV;

  const useColors = env !== 'test';

  console.log(inspect(object, { depth: null, colors: useColors }));
};
