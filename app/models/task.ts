import { TaskSchema } from '#database/schema'

export default class Task extends TaskSchema {
  public async toggleCompletion() {
    this.isCompleted = !this.isCompleted
    await this.save()
  }
}
