// app/page.tsx
import TaskManager from '../tasks/TaskManager'

export default function HomePage() {
  return (
      <main className="container mx-auto p-4">
        <TaskManager />
      </main>
  )
}
