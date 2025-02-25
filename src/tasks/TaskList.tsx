// tasks/TaskList.tsx
'use client'

import TaskItem from './TaskItem'
import { useTasks } from './TaskContext'

export default function TaskList() {
    const { tasks } = useTasks()

    if (tasks.length === 0) {
        return (
            <p className="text-center mt-4 text-gray-600">
                Nenhuma tarefa adicionada.
            </p>
        )
    }

    return (
        <ul className="mt-4 space-y-2">
            {tasks.map((task) => (
                <TaskItem key={task.id} id={task.id} title={task.title} />
            ))}
        </ul>
    )
}
