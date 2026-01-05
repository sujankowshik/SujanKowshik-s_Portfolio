import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  imageUrl: string
}

export function ProjectCard({ title, description, techStack, githubUrl, imageUrl }: ProjectCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          width={200}
          height={48}
        />
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-tight text-foreground">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}{" "}
                <span className="inline-block">
                  <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">{description}</p>
        <ul className="mt-4 flex text-xs font-medium text-muted-foreground" aria-label="Project links">
          <li>
            <a
              href={githubUrl}
              className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-3.5 w-3.5" />
              View on GitHub
            </a>
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-full bg-primary/10 text-primary hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
