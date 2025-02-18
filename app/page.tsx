"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"

export default function RedirectForm() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 300))
      window.location.href = `https://pan.ofhe.cn/s/${encodeURIComponent(input.trim())}`
    }
  }

  const clearInput = () => {
    setInput("")
  }

  const previewUrl = input.trim() ? `https://pan.ofhe.cn/s/${encodeURIComponent(input.trim())}` : null

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-secondary">
      <Card className="w-full max-w-md transition-all duration-200 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary">Box访问助手</CardTitle>
          <CardDescription className="text-center">输入提取码时，请注意大小写</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="请输入提取码"
                className="pr-10 transition-all duration-200 border-2 h-12 text-lg focus:border-primary"
                autoFocus
                disabled={isLoading}
              />
              {input && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  onClick={clearInput}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {previewUrl && (
              <div className="text-sm text-muted-foreground break-all animate-fade-in">
                <p className="font-medium mb-1">预览URL:</p>
                <p className="font-mono bg-accent p-2 rounded">{previewUrl}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-lg transition-all duration-200 bg-primary hover:bg-primary/90"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  跳转中
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Go <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

