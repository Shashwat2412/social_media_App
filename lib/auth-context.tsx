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
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing authentication on app load
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("token")
        const userData = localStorage.getItem("user")

        if (token && userData) {
          // Set the authorization header
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`

          // Parse and set user data
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)

          // Optionally verify token is still valid by making a test request
          try {
            await api.get("/users") // This will fail if token is invalid
          } catch (error) {
            // Token is invalid, clear auth data
            console.log("Token validation failed, clearing auth data")
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            delete api.defaults.headers.common["Authorization"]
            setUser(null)
          }
        }
      } catch (error) {
        console.error("Error initializing auth:", error)
        // Clear potentially corrupted data
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        delete api.defaults.headers.common["Authorization"]
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password })
      const { access_token, user: userData } = response.data

      // Store auth data
      localStorage.setItem("token", access_token)
      localStorage.setItem("user", JSON.stringify(userData))

      // Set authorization header
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`

      // Update state
      setUser(userData)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    }
  }

  const signup = async (username: string, email: string, password: string) => {
    try {
      const response = await api.post("/auth/signup", { username, email, password })
      const { access_token, user: userData } = response.data

      // Store auth data
      localStorage.setItem("token", access_token)
      localStorage.setItem("user", JSON.stringify(userData))

      // Set authorization header
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`

      // Update state
      setUser(userData)
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    }
  }

  const logout = () => {
    // Clear all auth data
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    delete api.defaults.headers.common["Authorization"]
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
