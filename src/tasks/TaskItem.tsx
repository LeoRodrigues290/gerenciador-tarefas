// tasks/TaskItem.tsx
'use client'

import { useTasks } from './TaskContext'
import { type FC } from 'react'

interface TaskItemProps {
    id: number
    title: string
}

const TaskItem: FC<TaskItemProps> = ({ id, title }) => {
    const { removeTask } = useTasks()

    return (
        <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm hover:shadow-md transition">
            <span>{title}</span>
            <button
                onClick={() => removeTask(id)}
                className="text-red-500 hover:text-red-600"
            >
                Remover
            </button>
        </li>
    )
}

export default TaskItem
