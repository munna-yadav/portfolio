// src/Home.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Munna 👋</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A passionate developer building web apps with React, TypeScript, and Tailwind CSS.
          </p>
          <Button>Get in Touch</Button>
        </CardContent>
      </Card>
    </section>
  )
}
