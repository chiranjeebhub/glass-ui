import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg bg-white/10 dark:bg-slate-700/10 p-6 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 dark:hover:bg-slate-700/20 border border-white/20 dark:border-slate-700/20",
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
