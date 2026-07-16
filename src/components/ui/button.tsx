import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-evergreen-900 text-cream hover:bg-evergreen-800 active:scale-[0.98] shadow-card",
        gold: "bg-gold-500 text-evergreen-950 hover:bg-gold-400 active:scale-[0.98] shadow-card",
        terracotta:
          "bg-terracotta-600 text-white hover:bg-terracotta-500 active:scale-[0.98] shadow-card",
        whatsapp:
          "bg-[#128c4b] text-white hover:bg-[#0f7a41] active:scale-[0.98] shadow-card",
        outline:
          "border border-evergreen-300 bg-transparent text-evergreen-900 hover:border-evergreen-600 hover:bg-evergreen-50",
        ghost: "text-evergreen-800 hover:bg-evergreen-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
