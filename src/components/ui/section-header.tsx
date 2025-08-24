import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: React.ReactNode
  description?: string
  className?: string
  animate?: boolean
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  animate = true
}: SectionHeaderProps) {
  const content = (
    <div className={cn("text-center space-y-6", className)}>
      {badge && (
        <Badge variant="outline" className="text-sm px-4 py-2">
          {badge}
        </Badge>
      )}
      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}