import { getTodos } from '@/lib/todos'
import TodoItem from '@/components/todo-item'
import NewTodoForm from './components/new-todo-form'

export default async function Home() {
  const { todos } = await getTodos()
  return (
    <main className={`py-20`}>
      <div className='container'>
        <h1
          className={`text-primary rounded-sm p-2 text-center text-lg font-light uppercase tracking-wider text-neutral-600 lg:text-3xl`}
        >
          Todos App
        </h1>

        <NewTodoForm />

        <h2 className='border-b-muted text-muted-foreground mb-8 mt-10 border-b pb-2 text-center text-sm font-light uppercase tracking-wider lg:mb-2 lg:mt-5 lg:text-left'>
          Previous todos
        </h2>

        <ul className={`space-y-8 lg:space-y-4`}>
          {todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </div>
    </main>
  )
}
