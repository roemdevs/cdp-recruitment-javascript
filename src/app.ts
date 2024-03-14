import { data } from './data/data';
import { filterByAnimals } from './utils/filter-by-animals';
import { logFullObject } from './utils/log-full-object';
import { parseCLIParams } from './utils/parse-cli-params';

const main = (): void => {
  const params = parseCLIParams();

  if (params.has('filter')) {
    const filter = params.get('filter');
    logFullObject(filterByAnimals(data, filter));
  }
};

main();
