# Background Jobs MongoDB

[![npm version](https://badge.fury.io/js/@universal-packages%2Fbackground-jobs-mongodb.svg)](https://www.npmjs.com/package/@universal-packages/background-jobs-mongodb)
[![Testing](https://github.com/universal-packages/universal-background-jobs-mongodb/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-background-jobs-mongodb/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-background-jobs-mongodb/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-background-jobs-mongodb)

MongoDB queue adapter for [universal-background-jobs](https://github.com/universal-packages/universal-background-jobs).

## Install

```shell
npm install @universal-packages/background-jobs-mongodb

npm install @universal-packages/background-jobs
```

## MongoQueue

Just pass this engine to the Jobs instance to enable it to use mongodb as the queue system.

```js
import { Jobs } from '@universal-packages/universal-background-jobs'
import { MongoQueue } from '@universal-packages/universal-background-jobs-mongodb'

const jobs = new Jobs({ queue: 'mongodb', queueOptions: { url: 'mongodb://localhost:27017' } })

await jobs.prepare()
```

### Options

`MongoQueue` takes the same [options](https://github.com/universal-packages/universal-mongodb-queue?tab=readme-ov-file#options) as the mongodb queue instance.

Additionally takes the following ones:

- **`globalClient`** `String`
  If the mongodb client lives in a global variable, name it here.

## Typescript

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
