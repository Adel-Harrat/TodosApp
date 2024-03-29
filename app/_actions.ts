'use server'

import { createTodo, deleteTodo, updateTodoStatus } from '@/lib/todos'
import { revalidatePath } from 'next/cache'

export async function createTodoAction(title: string) {
  await createTodo(title)
  revalidatePath('/')
}

export async function updateTodoStatusAction(id: string, isCompleted: boolean) {
  await updateTodoStatus(id, isCompleted)
  revalidatePath('/')
}

export async function deleteTodoAction(id: string) {
  await deleteTodo(id)
  revalidatePath('/')
}
