import { JobItem, LaterOptions, QueueInterface } from '@universal-packages/background-jobs'
import { MongoQueue as MQ } from '@universal-packages/mongodb-queue'

import { MongodbQueueOptions } from './MongodbQueue.types'

export default class MongodbQueue implements QueueInterface {
  public readonly options: MongodbQueueOptions

  private mongoQueue: MQ

  public constructor(options?: MongodbQueueOptions) {
    this.options = { identifier: 'background-jobs', ...options }

    const client = global[this.options.globalClient] || this.options.client

    this.mongoQueue = new MQ({ ...this.options, client })
  }

  public async prepare(): Promise<void> {
    await this.mongoQueue.connect()
  }

  public async release(): Promise<void> {
    await this.mongoQueue.disconnect()
  }

  public async clear(): Promise<void> {
    await this.mongoQueue.clear()
  }

  public async enqueue(item: JobItem, queue: string, options?: LaterOptions): Promise<void> {
    await this.mongoQueue.enqueue(item, queue, options)
  }

  public async dequeue(queue: string): Promise<JobItem> {
    const inQueue = await this.mongoQueue.dequeue(queue)

    if (inQueue) return inQueue.payload as JobItem
  }
}
