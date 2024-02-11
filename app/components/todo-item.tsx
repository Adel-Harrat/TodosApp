'use client'

import { Todo } from '@prisma/client'
import { Checkbox } from '@/components/checkbox'
import { Label } from '@/components/label'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { deleteTodoAction, updateTodoStatusAction } from '@/app/_actions'
import { Trash2 } from 'lucide-react'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)

  async function handleChange() {
    setIsChecked(prev => !prev)
    await updateTodoStatusAction(todo.id, !isChecked)
  }

  async function handleDelete() {
    await deleteTodoAction(todo.id)
  }

  return (
    <li
      className={`flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between`}
    >
      <div className={`flex gap-2`}>
        <Checkbox
          id={todo.id}
          defaultChecked={isChecked}
          onCheckedChange={handleChange}
        />
        <Label
          className={cn('cursor-pointer', {
            'text-muted-foreground line-through opacity-65': isChecked
          })}
          htmlFor={todo.id}
        >
          {todo.title}
        </Label>

        <button
          className={cn({
            'hidden ': !isChecked
          })}
          onClick={handleDelete}
        >
          <Trash2 className={`h-4 w-4`} />
        </button>
      </div>

      <span
        className={cn(`text-muted-foreground text-sm lg:ml-auto`, {
          'text-muted-foreground line-through opacity-65': isChecked
        })}
      >
        {todo.updatedAt.toUTCString()}
      </span>
    </li>
  )
}
