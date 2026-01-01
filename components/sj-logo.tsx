export function SJLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="SJ Logo">
      <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.05" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-mono)"
        fontSize="16"
        fontWeight="600"
        style={{ letterSpacing: "-0.5px" }}
      >
        SJ
      </text>
    </svg>
  )
}
