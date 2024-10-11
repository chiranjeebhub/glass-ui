import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-white/10 dark:bg-slate-700/10 text-slate-800 dark:text-white hover:bg-white/20 dark:hover:bg-slate-700/20 border border-white/20 dark:border-slate-700/20",
        destructive:
          "bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
        outline:
          "border border-slate-200 dark:border-slate-700 bg-white/5 dark:bg-slate-900/5 hover:bg-slate-100/10 dark:hover:bg-slate-800/10 text-slate-800 dark:text-slate-200",
        secondary:
          "bg-slate-100/50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-700/50",
        ghost:
          "hover:bg-slate-100/10 dark:hover:bg-slate-800/10 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100",
        link: "underline-offset-4 hover:underline text-slate-800 dark:text-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const GlassButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "backdrop-blur-md"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, buttonVariants };
