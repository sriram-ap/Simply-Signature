import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
  {
    variants: {
      variant: {
        green: "bg-evergreen-900 text-gold-300",
        gold: "bg-gold-500/15 text-gold-700 border border-gold-500/30",
        cream: "bg-cream-deep text-evergreen-800",
        outline: "border border-evergreen-300 text-evergreen-800",
        terracotta: "bg-terracotta-600/10 text-terracotta-700 border border-terracotta-600/25",
      },
    },
    defaultVariants: { variant: "green" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
