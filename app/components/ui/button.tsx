import * as React from "react";
import { Slot } from "../../../node_modules/@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-[45px] text-[16px] leading-[175%] transition-colors duration-150 ease-in focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(163,163,163,0.15)] text-[#C3C3C3] hover:bg-golden hover:text-[#1A1A1A] shadow border border-[rgba(219,234,254,.2)]",
        glass:
          "bg-[rgba(163,163,163,0.15)] text-[rgba(195,195,195,0.8)] hover:text-golden hover:bg-[rgba(163,163,163,0.3)] shadow border border-[rgba(219,234,254,.2)] outline-none ring-golden after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-golden after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-golden/40 hover:text-golden after:hover:bg-opacity-15 focus:ring-2",
        link: "relative !p-0 after:absolute after:bg-gray-200 after:bottom-[4px] after:left-0 after:h-px after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
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
