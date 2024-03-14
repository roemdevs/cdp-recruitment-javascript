const PARAM_PREFIX = '--';
const PARAM_DELIMITER = '=';

type ParamsMap = Map<string, string | boolean>;

/**
 * @description Parse CLI params. Params should be passed as follow:
 * --key=value
 * --key
 * @returns Map params: Map<string, string | boolean>;
 */
export const parseCLIParams = (): ParamsMap => {
  const params = process.argv.slice(2);
  const filteredParams = params.filter((arg) => arg.startsWith(PARAM_PREFIX));

  const paramsMap = new Map<string, string | boolean>();

  filteredParams.forEach((arg) => {
    const [key, value] = arg.slice(2).split(PARAM_DELIMITER);

    if (value) {
      paramsMap.set(key, value);
    } else {
      paramsMap.set(key, true);
    }
  });

  return paramsMap;
};
