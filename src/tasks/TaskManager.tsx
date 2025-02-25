// tasks/TaskManager.tsx
'use client'

import { TaskProvider } from './TaskContext'
import AddTask from './AddTask'
import TaskList from './TaskList'

export default function TaskManager() {
    return (
        <TaskProvider>
            <div className="bg-white p-6 rounded-md shadow-md">
                <h1 className="text-2xl font-bold text-center text-blue-600">
                    Gerenciador de Tarefas
                </h1>
                <AddTask />
                <TaskList />
            </div>
        </TaskProvider>
    )
}
