// tasks/AddTask.tsx
'use client'

import { FormEvent, useState } from 'react'
import { useTasks } from './TaskContext'

export default function AddTask() {
    const [title, setTitle] = useState('')
    const { addTask } = useTasks()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (title.trim() === '') return
        addTask(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nova tarefa"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
                Adicionar
            </button>
        </form>
    )
}
