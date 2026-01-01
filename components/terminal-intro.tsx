"use client"

import { useEffect, useState } from "react"

export function TerminalIntro() {
  const fullContent = [
    { prompt: "$ whoami", output: "Sujan Kowshik Jilla" },
    { prompt: "$ role", output: "Software Engineer | Full-Stack & FinTech" },
  ]

  // Create a static string for the initial/fallback state
  const staticContent = fullContent.map((l) => `${l.prompt}\n${l.output}`).join("\n")

  const [displayText, setDisplayText] = useState(staticContent)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(staticContent.length)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const hasRun = typeof window !== "undefined" && sessionStorage.getItem("terminal_anim_run")

    if (!hasRun) {
      // Start animation if it hasn't run yet
      setIsAnimating(true)
      setDisplayText("")
      setCurrentIndex(0)
    }

    // Cursor animation logic
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (!isAnimating || currentIndex >= staticContent.length) {
      if (isAnimating && currentIndex >= staticContent.length) {
        sessionStorage.setItem("terminal_anim_run", "true")
        setIsAnimating(false)
      }
      return
    }

    const typingTimeout = setTimeout(() => {
      setDisplayText(staticContent.slice(0, currentIndex + 1))
      setCurrentIndex((prev) => prev + 1)
    }, 30) // Faster typing for better UX

    return () => clearTimeout(typingTimeout)
  }, [isAnimating, currentIndex, staticContent])

  return (
    <div className="mb-8 rounded-lg border border-primary/20 bg-card p-6 font-mono text-sm shadow-lg h-fit">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-destructive/80" />
        <div className="h-3 w-3 rounded-full bg-chart-4/80" />
        <div className="h-3 w-3 rounded-full bg-primary/80" />
      </div>
      <pre className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
        {displayText}
        {(isAnimating || currentIndex < staticContent.length) && (
          <span className={showCursor ? "opacity-100" : "opacity-0"}>▊</span>
        )}
      </pre>
    </div>
  )
}
