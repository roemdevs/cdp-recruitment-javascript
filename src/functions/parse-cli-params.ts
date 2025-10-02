const PARAM_PREFIX = '--';
const PARAM_DELIMITER = '=';

type ParamsMap = Map<string, string | boolean>;

export const parseCLIParams = (): ParamsMap => {
  const params = process.argv.slice(2);
  const filteredParams = params.filter((param) => param.startsWith(PARAM_PREFIX));

  const paramsMap = new Map<string, string | boolean>();

  filteredParams.forEach((param) => {
    const [key, value] = param.split(PARAM_DELIMITER);

    if (value) {
      paramsMap.set(key, value);
    } else {
      paramsMap.set(key, true);
    }
  });

  return paramsMap;
};
