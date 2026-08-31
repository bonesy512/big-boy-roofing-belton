import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-glow-amber border border-amber-400 font-bold",
        secondary:
          "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 hover:border-slate-600",
        destructive:
          "bg-red-600 text-white hover:bg-red-500",
        outline:
          "border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800/80 hover:text-white hover:border-amber-500/50",
        ghost: "hover:bg-slate-800 hover:text-white text-slate-300",
        link: "text-amber-400 underline-offset-4 hover:underline",
        hazard:
          "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20 hover:brightness-110 border border-yellow-300 tracking-wide uppercase",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3.5 text-xs",
        lg: "h-13 rounded-xl px-7 py-3.5 text-base font-bold",
        xl: "h-14 rounded-xl px-8 py-4 text-lg font-extrabold",
        icon: "h-10 w-10",
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
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
