import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { TaskFactory } from '#database/factories/task_factory'

export default class TaskSeeder extends BaseSeeder {
  async run() {
    await TaskFactory.createMany(10)
  }
}
