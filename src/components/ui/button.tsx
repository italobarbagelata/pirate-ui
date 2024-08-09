import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-Surface-ButtonPrimary text-Text-ButtonPrimary hover:bg-Surface-ButtonPrimaryHover",
        destructive:
          "bg-Surface-Error text-Text-ButtonPrimary hover:bg-Surface-ErrorMedium",
        outline:
          "border border-Border-ButtonOutline bg-transparent hover:bg-Surface-ButtonOutlineHover",
        secondary:
          "bg-Surface-ButtonSecondary text-Text-ButtonSecondary hover:bg-Surface-ButtonSecondaryHover",
        ghost: "hover:bg-Surface-ButtonSecondaryHover hover:text-ButtonOutline",
        link: "text-Text-ButtonPrimaryAlternative underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
  gradientBorder?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      gradientBorder = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className={`relative inline-block ${disabled ? "opacity-50" : ""}`}>
        {gradientBorder && (
          <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-gradient-start via-blue-500 to-gradient-end bg-size-200% bg-pos-0%_50% animate-gradientAnimation"></div>
        )}
        <Comp
          ref={ref}
          className={`${buttonVariants({
            variant,
            size,
          })} ${className} relative z-10 p-2  rounded-full`}
          {...props}
        >
          {props.children}
        </Comp>
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
