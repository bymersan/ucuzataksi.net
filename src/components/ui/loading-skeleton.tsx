import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div className={cn("h-96 animate-pulse bg-muted/30 rounded-lg", className)} />
  )
}