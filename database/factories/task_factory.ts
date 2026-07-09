import factory from '@adonisjs/lucid/factories'
import Task from '#models/task'

export const TaskFactory = factory
  .define(Task, async ({ faker }) => {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      long_description: faker.lorem.paragraph(),
      isCompleted: faker.datatype.boolean(),
    }
  })
  .build()
