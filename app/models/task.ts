import { TaskSchema } from '#database/schema'
import { beforeCreate } from '@adonisjs/lucid/orm'

export default class Task extends TaskSchema {
  @beforeCreate()
  public static setStatus(task: Task) {
    task.isCompleted = false
  }

  public async toggleCompletion() {
    this.isCompleted = !this.isCompleted
    await this.save()
  }
}
