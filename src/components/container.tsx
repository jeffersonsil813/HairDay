import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      lg: "max-w-360 p-3",
      md: "max-w-170.5 px-4 py-20",
      sm: "max-w-124.5 p-20",
    },
  },
  defaultVariants: { size: "lg" },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

const Container = ({
  as = "div",
  children,
  className,
  size,
  ...props
}: ContainerProps) => {
  return React.createElement(
    as,
    {
      className: containerVariants({ className, size }),
      ...props,
    },
    children,
  );
};

export default Container;
