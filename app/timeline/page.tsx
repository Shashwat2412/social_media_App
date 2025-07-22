"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useNotifications } from "@/lib/notification-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { api } from "@/lib/api"
import { useRouter } from "next/navigation"

interface Post {
  _id: string
  title: string
  content: string
  author: {
    _id: string
    username: string
  }
  createdAt: string
}

interface User {
  _id: string
  username: string
  email: string
}

export default function Timeline() {
  const { user, logout } = useAuth()
  const { notifications } = useNotifications()
  const { toast } = useToast()
  const router = useRouter()

  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    fetchTimeline()
    fetchUsers()
  }, [user, router])

  useEffect(() => {
    // Show toast notifications
    notifications.forEach((notification) => {
      toast({
        title: notification.type === "follow" ? "New Follower" : "New Post",
        description: notification.message,
      })
    })
  }, [notifications, toast])

  const fetchTimeline = async () => {
    try {
      const response = await api.get("/posts/timeline")
      setPosts(response.data)
    } catch (error) {
      console.error("Failed to fetch timeline:", error)
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await api.get("/users")
      setUsers(response.data.filter((u: User) => u._id !== user?.id))
    } catch (error) {
      console.error("Failed to fetch users:", error)
    }
  }

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.post("/posts", { title, content })
      setTitle("")
      setContent("")
      toast({
        title: "Post Queued",
        description: "Your post will be published in 5 seconds",
      })

      // Refresh timeline after a delay
      setTimeout(() => {
        fetchTimeline()
      }, 6000)
    } catch (error) {
      console.error("Failed to create post:", error)
      toast({
        title: "Error",
        description: "Failed to create post",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleFollow = async (userId: string) => {
    try {
      await api.post(`/users/follow/${userId}`)
      toast({
        title: "Success",
        description: "User followed successfully",
      })
    } catch (error) {
      console.error("Failed to follow user:", error)
    }
  }

  const handleUnfollow = async (userId: string) => {
    try {
      await api.post(`/users/unfollow/${userId}`)
      toast({
        title: "Success",
        description: "User unfollowed successfully",
      })
    } catch (error) {
      console.error("Failed to unfollow user:", error)
    }
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Social Media App</h1>
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.username}!</span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create Post */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Create a Post</CardTitle>
                <CardDescription>Share something with your followers</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      rows={3}
                    />
                  </div>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create Post"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Timeline</h2>
              {posts.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center text-gray-500">
                    No posts yet. Follow some users or create your first post!
                  </CardContent>
                </Card>
              ) : (
                posts.map((post) => (
                  <Card key={post._id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription>
                        by {post.author.username} • {new Date(post.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{post.content}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Users to Follow */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Users to Follow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {users.map((u) => (
                    <div key={u._id} className="flex items-center justify-between">
                      <span className="font-medium">{u.username}</span>
                      <div className="space-x-2">
                        <Button size="sm" onClick={() => handleFollow(u._id)}>
                          Follow
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleUnfollow(u._id)}>
                          Unfollow
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
