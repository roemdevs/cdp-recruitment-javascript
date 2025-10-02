# Javascript developer test

## Filter

Your job is to write a command-line interface in Node.js.
This program has to filter a list of elements containing a pattern.

Details:

- In the following file `src/data/data.js`, there are `Countries` containing `Peoples` containing `Animals`.
- Only animals containing `ry` are displayed. The order should be kept intact.
- Empty array after filtering are NOT returned.

Sample of running the command, and its output:

```shell script
$ node app.js --filter=ry
[
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
]
```

## Count

The next goal is to print the counts of People and Animals by counting the number of children and appending it in the name, eg. `Satanwi [2]`.

Sample of running the command, and its output:

```shell script
node app.js --count
[ { name: 'Dillauti [5]',
    people:
     [ { name: 'Winifred Graham [6]',
         animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' } ] },
       { name: 'Blanche Viciani [8]',
         animals:
          [ { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' } ] },
      ...
...
]
```

## Requirements

- The code must be available in a GIT repository
- No library/modules should be used, except for the testing library

## Appreciation

We will be really attentive to:

- Code readability, structure and consistency
- Tests, and how they are written

## Run the project

Before starting, install the packages: `npm install`

As we're using TypeScript in the project, you will need to build the project first.

To do so, run the command `npm run build`.

You can now run `node dist/app.js` to run the application.

Example, to run the application with the parameter `--filter=ry`, you must execute the following command: `node dist/app.js --filter=ry`.

You can also run it using `npm run start`, but you will need to use the following syntax to pass the parameters `npm start -- --filter=ry`

In order to count: `node dist/app.js --count` or `npm start -- --count`

If you want to filter and count at the same time: `node dist/app.js --filter=ry --count` or `npm start -- --filter=ry --count`
