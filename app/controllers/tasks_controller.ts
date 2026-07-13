import Task from '#models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    const tasks: Task[] = await Task.all()

    return inertia.render('tasks/index', {
      // Pass the serialized array instead of the raw Task[]
      tasks: tasks,
    })
  }

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('tasks/create', {})
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['title', 'description', 'longDescription'])
    await Task.create(data)

    return response.redirect().toRoute('tasks.index')
  }

  /**
   * Show individual record
   */
  async show({ inertia, params }: HttpContext) {
    const task = await Task.findOrFail(params.id)

    return inertia.render('tasks/show', {
      task: task.serialize(),
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    task.toggleCompletion()
    return response.redirect().back()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const task = await Task.findOrFail(params.id)
    await task.delete()
    return response.redirect('/tasks')
  }
}
