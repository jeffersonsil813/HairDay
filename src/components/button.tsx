import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Text from "./text";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg gap-8",
  {
    variants: {
      variant: {
        primary: "bg-yellow border-2 border-transparent hover:border-yellow-light",
      },
      size: {
        md: "h-14 px-4",
      },
      disabled: {
        true: "pointer-events-none opacity-30 select-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
  defaultVariants: { variant: "primary" },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant,
  disabled,
  children,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, disabled, size, className })}
      {...props}
    >
      <Text variant="body-sm-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
