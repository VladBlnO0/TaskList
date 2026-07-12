/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  tasks: {
    index: typeof routes['tasks.index']
    create: typeof routes['tasks.create']
    store: typeof routes['tasks.store']
    show: typeof routes['tasks.show']
    edit: typeof routes['tasks.edit']
    update: typeof routes['tasks.update']
    destroy: typeof routes['tasks.destroy']
  }
}
