import { MongoQueueOptions } from '@universal-packages/mongodb-queue'

export interface MongodbQueueOptions extends MongoQueueOptions {
  globalClient?: string
}
