"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, Copy, Check } from "lucide-react"

export default function RedirectForm() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 300))
      window.location.href = `https://box.ofhe.cn/s/${encodeURIComponent(input.trim())}`
    }
  }

  const clearInput = () => {
    setInput("")
  }

  const copyUrl = async () => {
    if (previewUrl) {
      try {
        await navigator.clipboard.writeText(previewUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy URL:", err)
      }
    }
  }

  const previewUrl = input.trim() ? `https://box.ofhe.cn/s/${encodeURIComponent(input.trim())}` : null

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md">
        <Card className="transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/20">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Box访问助手
            </CardTitle>
            <CardDescription className="text-base">输入提取码时，请注意大小写</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="请输入提取码"
                  className="pr-10 transition-all duration-200 border-2 h-14 text-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                  autoFocus
                  disabled={isLoading}
                />
                {input && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-muted-foreground hover:text-primary"
                    onClick={clearInput}
                    disabled={isLoading}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {previewUrl && (
                <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-muted-foreground">预览URL:</p>
                    <Button type="button" variant="ghost" size="sm" onClick={copyUrl} className="h-8 px-2 text-xs">
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          已复制
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          复制
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="font-mono text-sm bg-muted/50 p-3 rounded-lg border break-all">{previewUrl}</div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold transition-all duration-200 bg-primary hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                disabled={!input.trim() || isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    跳转中...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    立即访问 <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
