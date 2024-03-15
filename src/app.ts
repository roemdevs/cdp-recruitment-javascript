import { data } from './data/data';
import { countPeopleAndAnimals } from './utils/count-people-and-animals';
import { filterByAnimals } from './utils/filter-by-animals';
import { logFullObject } from './utils/log-full-object';
import { parseCLIParams } from './utils/parse-cli-params';

const main = (): void => {
  const params = parseCLIParams();

  if (params.size === 0) {
    console.log('Warning: You must pass a parameter to the application.');
    console.log('Allowed parameters are `--filter=<name>` or `--count`.');
  }

  let output = data;

  if (params.has('filter')) {
    const filter = params.get('filter');
    output = filterByAnimals(output, filter);
  }
  if (params.has('count')) {
    output = countPeopleAndAnimals(output);
  }

  logFullObject(output);
};

main();
