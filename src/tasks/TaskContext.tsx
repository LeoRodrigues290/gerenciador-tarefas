// tasks/TaskContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Task {
    id: number
    title: string
}

interface TaskContextProps {
    tasks: Task[]
    addTask: (title: string) => void
    removeTask: (id: number) => void
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined)

export function useTasks() {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('useTasks must be used within a TaskProvider')
    }
    return context
}

interface TaskProviderProps {
    children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
        }
        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    const removeTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    )
}
