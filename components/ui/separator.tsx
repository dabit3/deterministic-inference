import * as React from "react";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { decorative?: boolean }
>(({ className, decorative = true, role = "separator", ...props }, ref) => (
  <div
    ref={ref}
    role={decorative ? "separator" : role}
    aria-orientation="horizontal"
    className={cn("shrink-0 border-t border-border/60", className)}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
