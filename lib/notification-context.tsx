"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./auth-context"
import { io, type Socket } from "socket.io-client"

interface Notification {
  type: string
  message: string
  from: string
  postId?: string
}

interface NotificationContextType {
  notifications: Notification[]
  clearNotifications: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [socket, setSocket] = useState<Socket | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      const newSocket = io("http://localhost:3001")
      setSocket(newSocket)

      newSocket.emit("join", user.id)

      newSocket.on("notification", (notification: Notification) => {
        setNotifications((prev) => [...prev, notification])

        // Auto-clear notification after 5 seconds
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n !== notification))
        }, 5000)
      })

      return () => {
        newSocket.close()
      }
    }
  }, [user])

  const clearNotifications = () => {
    setNotifications([])
  }

  return (
    <NotificationContext.Provider value={{ notifications, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider")
  }
  return context
}
