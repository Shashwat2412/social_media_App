"use client"

import type React from "react"
import { use, useEffect, useState } from "react"
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

// --- Interfaces ---
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
  following?: string[]
}

// --- SVG Icons ---
const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// --- Main Timeline Component ---
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
  const [followingList, setFollowingList] = useState<string[]>(user?.following || [])

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

  useEffect(() => {
    if (user?.following) {
      setFollowingList(user.following)
    }
  }, [user])


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
      // Make sure user and user.id exist before filtering
      setUsers(response.data.filter((u: User) => user && u._id !== user.id))
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
        description: "Your post will be published shortly.",
      })
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
      setFollowingList((prev) => [...prev, userId])
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
      setFollowingList((prev) => prev.filter((id) => id !== userId))
      toast({
        title: "Success",
        description: "User unfollowed successfully",
      })
    } catch (error) {
      console.error("Failed to unfollow user:", error)
    }
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
        <p className="ml-4 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    // ✨ NEW: Added subtle gradient background for more depth
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-[#111827] dark:to-black text-gray-800 dark:text-gray-200 font-sans">
      {/* Add custom keyframe animations directly into the component */}
      <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}</style>

      {/* --- Sticky Header with Glassmorphism Effect --- */}
      <header className="sticky top-0 z-40 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* ✨ NEW: Updated branding gradient to a vibrant indigo-purple-fuchsia */}
            <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500">
              ConnectSphere
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {/* ✨ NEW: Avatar gradient matches the new branding */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-medium hidden sm:block">Welcome, {user.username}!</span>
              </div>
              <Button
                onClick={logout}
                variant="ghost"
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded-full p-2"
                title="Logout"
              >
                <LogoutIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- Main Content: Create Post & Timeline --- */}
          <div className="lg:col-span-8 space-y-8">
            {/* ✨ NEW: Enhanced card with a more subtle, purple-hued shadow on hover */}
            <Card className="transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 dark:bg-slate-900/80">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  {/* ✨ NEW: Icon color updated to match the new theme */}
                  <PlusIcon className="w-6 h-6 text-indigo-500" />
                  Create a New Post
                </CardTitle>
                <CardDescription>Share your thoughts with the world</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="mb-1 block">Title</Label>
                    <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="What's the title?" />
                  </div>
                  <div>
                    <Label htmlFor="content" className="mb-1 block">Content</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      rows={4}
                      placeholder="What's on your mind?"
                    />
                  </div>
                  {/* ✨ NEW: Updated button to use the new branding gradient */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:from-indigo-600 hover:via-purple-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:scale-100 flex items-center justify-center space-x-2"
                  >
                    {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                    <span>{loading ? "Posting..." : "Create Post"}</span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* --- Timeline with Staggered Animation --- */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Timeline</h2>
              {posts.length === 0 && !loading ? (
                <Card className="text-center py-12 animate-fadeInUp dark:bg-slate-900/80">
                  <CardContent className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                    <svg className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h7" /></svg>
                    <p className="font-semibold">It's quiet here...</p>
                    <p className="text-sm">Create a post or follow users to see their updates.</p>
                  </CardContent>
                </Card>
              ) : (
                posts.map((post, index) => (
                  <Card
                    key={post._id}
                    className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fadeInUp dark:bg-slate-900/80"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>
                        by <span className="font-semibold text-indigo-500 dark:text-indigo-400">{post.author.username}</span> • {new Date(post.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap">{post.content}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* --- Sticky Sidebar: Users to Follow --- */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              <Card className="transition-all duration-300 hover:shadow-xl dark:bg-slate-900/80">
                <CardHeader>
                  <CardTitle>Discover People</CardTitle>
                  <CardDescription>Expand your network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((u) => (
                      <div key={u._id} className="flex items-center justify-between p-2 -m-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                            {u.username.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-bold">{u.username}</span>
                        </div>
                        <div className="flex space-x-2">
                          {followingList.includes(u._id) ? (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUnfollow(u._id)}
                              className="text-xs px-3 py-1"
                            >
                              Unfollow
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => handleFollow(u._id)}
                              className="text-xs px-3 py-1 text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors transform hover:scale-105"
                            >
                              Follow
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}