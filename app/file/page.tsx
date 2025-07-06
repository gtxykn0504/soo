import FileEncoder from "@/components/file-encoder"

export default function FilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="container mx-auto py-8">
        <FileEncoder />
      </div>
    </div>
  )
}
