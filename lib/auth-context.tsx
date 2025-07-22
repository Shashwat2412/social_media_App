"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { api } from "./api"

interface User {
  id: string
  email: string
  username: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (token && userData) {
      setUser(JSON.parse(userData))
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
  }, [])

  const login = async (email: string, password: string) => {
    const response = await api.post("/auth/login", { email, password })
    const { access_token, user: userData } = response.data

    localStorage.setItem("token", access_token)
    localStorage.setItem("user", JSON.stringify(userData))
    api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
    setUser(userData)
  }

  const signup = async (username: string, email: string, password: string) => {
    const response = await api.post("/auth/signup", { username, email, password })
    const { access_token, user: userData } = response.data

    localStorage.setItem("token", access_token)
    localStorage.setItem("user", JSON.stringify(userData))
    api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    delete api.defaults.headers.common["Authorization"]
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
