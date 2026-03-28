import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        primary: "",
      },
      size: {
        md: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-yellow hover:fill-yellow-dark",
    },
    size: {
      md: "w-4.5 h-4.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonIconProps
  extends
    VariantProps<typeof buttonIconVariants>,
    React.ComponentProps<"button"> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

const ButtonIcon = ({
  variant,
  size,
  className,
  svg,
  ...props
}: ButtonIconProps) => {
  return (
    <button
      {...props}
      type="button"
      className={buttonIconVariants({ variant, size, className })}
    >
      <Icon svg={svg} className={buttonIconIconVariants({ variant, size })} />
    </button>
  );
};

export default ButtonIcon;
