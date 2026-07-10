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
      title: 'Latest Tasks',
    })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('tasks/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return { task: { id: params.id } }
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
