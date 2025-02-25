// app/layout.tsx
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Gerenciador de Tarefas',
    description: 'Um sistema simples para gerenciar tarefas',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body className="bg-gray-100 min-h-screen">
        {children}
        </body>
        </html>
    )
}
