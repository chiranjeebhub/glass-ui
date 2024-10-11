import * as React from "react";
import { cn } from "@/lib/utils";

export interface GlassTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const GlassTextarea = React.forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full rounded-md border border-slate-200/50 dark:border-slate-700/50 bg-white/10 dark:bg-slate-700/10 px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 dark:placeholder:text-slate-400  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-md text-slate-800 dark:text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassTextarea.displayName = "GlassTextarea";

export { GlassTextarea };
