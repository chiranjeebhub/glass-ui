import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const GlassLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      "text-slate-800 dark:text-white",
      "backdrop-blur-sm bg-white/10 dark:bg-slate-900/10",
      "rounded px-2 py-1",
      "border border-slate-200/50 dark:border-slate-700/50",
      "shadow-sm",
      className
    )}
    {...props}
  />
));
GlassLabel.displayName = LabelPrimitive.Root.displayName;

export { GlassLabel };
