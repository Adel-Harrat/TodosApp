'use client'

import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { createTodoAction } from '../_actions'
import { useRef } from 'react'

export default function NewTodoForm() {
  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    const title = data.get('title')
    if (!title || typeof title !== 'string') return
    formRef.current?.reset()
    await createTodoAction(title)
  }

  return (
    <form
      action={action}
      className={`mx-auto my-5 flex max-w-sm  flex-col gap-4 lg:flex-row`}
      ref={formRef}
    >
      <Input name='title' />
      <Button type='submit'>Add</Button>
    </form>
  )
}
