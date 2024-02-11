import prisma from './prisma'

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany()
    return { todos }
  } catch (error) {
    return { error }
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.todo.create({ data: { title } })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function updateTodoStatus(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted }
    })
    return { todo }
  } catch (error) {
    return { error }
  }
}

export async function deleteTodo(id: string) {
  try {
    const todo = await prisma.todo.delete({ where: { id } })
  } catch (error) {
    return { error }
  }
}
