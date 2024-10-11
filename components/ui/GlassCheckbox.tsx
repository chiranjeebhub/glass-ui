import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

interface GlassCheckboxProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    "onCheckedChange"
  > {
  label?: string;
  onCheckedChange?: (checked: boolean) => void;
}

const GlassCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  GlassCheckboxProps
>(({ className, label, onCheckedChange, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-slate-200/50 dark:border-slate-700/50 bg-white/10 dark:bg-slate-700/10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-800/50 dark:data-[state=checked]:bg-slate-200/50 data-[state=checked]:text-slate-50 dark:data-[state=checked]:text-slate-900 backdrop-blur-md",
        className
      )}
      onCheckedChange={(checked) =>
        onCheckedChange && onCheckedChange(checked === true)
      }
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <CheckIcon className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && (
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-800 dark:text-white">
        {label}
      </label>
    )}
  </div>
));

GlassCheckbox.displayName = "GlassCheckbox";

export { GlassCheckbox };
