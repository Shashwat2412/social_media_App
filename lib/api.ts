import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3001",
})

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear auth data on 401
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      delete api.defaults.headers.common["Authorization"]

      // Only redirect if we're not already on login/signup pages
      if (!window.location.pathname.includes("/login") && !window.location.pathname.includes("/signup")) {
        window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  },
)
