import { cva, cx, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import { typographyClasses, type TypographyVariant } from "./text";

export const inputTextLabelVariants = cva(
  "gap-2 rounded-lg border transition-colors flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "border-gray-500 focus:border-yellow-dark",
      },
      size: {
        md: "h-12 p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const inputTextVariants = cva("w-full outline-none", {
  variants: {
    variant: {
      primary: "text-gray-200 placeholder:text-gray-400!",
    },
    size: {
      md: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const inputTextIconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow",
    },
    size: {
      md: "h-5 w-5",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

interface InputTextProps
  extends
    VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  svg?: React.FC<React.ComponentProps<"svg">>;
  typography?: TypographyVariant;
}

const InputText = ({
  svg,
  variant,
  size,
  className,
  typography = "body-md",
  ...props
}: InputTextProps) => {
  return (
    <label className={inputTextLabelVariants({ variant, size })}>
      {svg && (
        <Icon svg={svg} className={inputTextIconVariants({ variant, size })} />
      )}
      <input
        {...props}
        type="text"
        placeholder="teste"
        className={cx(
          inputTextVariants({ variant, size, className }),
          typographyClasses[typography],
        )}
      />
    </label>
  );
};

export default InputText;
