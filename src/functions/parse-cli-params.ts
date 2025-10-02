const PARAM_PREFIX = '--';
const PARAM_DELIMITER = '=';

type ParamsMap = Map<string, string | boolean>;

export const parseCLIParams = (): ParamsMap => {
  const params = process.argv.slice(2);
  const filteredParams = params.filter((param) => param.startsWith(PARAM_PREFIX));

  const paramsMap = new Map<string, string | boolean>();

  filteredParams.forEach((param) => {
    const paramWithoutPrefix = param.slice(PARAM_PREFIX.length);
    const [key, value] = paramWithoutPrefix.split(PARAM_DELIMITER);

    if (value) {
      paramsMap.set(key, value);
    } else {
      paramsMap.set(key, true);
    }
  });

  return paramsMap;
};
