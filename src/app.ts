import { data } from './data/data';
import { countPeopleAndAnimals } from './functions/counting/count-people-and-animals';
import { filterByAnimals } from './functions/filtering/filter-by-animals';
import { logDeepObject } from './functions/log-deep-object';
import { parseCLIParams } from './functions/parse-cli-params';

function main(): void {
  const params = parseCLIParams();

  if (params.has('filter')) {
    const filter = params.get('filter');
    logDeepObject(filterByAnimals(data, filter));
  } else if (params.has('count')) {
    logDeepObject(countPeopleAndAnimals(data));
  }
}

main();
