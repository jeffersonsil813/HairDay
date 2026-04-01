import { cva, cx, type VariantProps } from "class-variance-authority";
import CalendarIcon from "../assets/icons/CalendarBlank.svg?react";
import CaretDown from "../assets/icons/CaretDown.svg?react";
import { getCurrentDate } from "../utils/date";
import Icon from "./icon";
import { typographyClasses, type TypographyVariant } from "./text";

export const inputDateLabelVariants = cva(
  "relative gap-2 rounded-lg border transition-colors flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "border-gray-500 focus-within:border-yellow-dark",
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

export const inputDateTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-200",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const inputDateIconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-yellow",
      secondary: "fill-gray-300",
    },
    size: {
      md: "h-5 w-5",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export const inputDateVariants = cva(
  "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer scheme-dark outline-none w-full",
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

interface InputDateProps
  extends
    VariantProps<typeof inputDateVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  typography?: TypographyVariant;
}

const InputDate = ({
  variant,
  size,
  className,
  typography = "body-md",
  ...props
}: InputDateProps) => {
  return (
    <label className={inputDateLabelVariants({ variant, size })}>
      <Icon
        svg={CalendarIcon}
        className={inputDateIconVariants({ variant, size })}
      />
      <input
        {...props}
        type="date"
        min={getCurrentDate()}
        className={cx(
          inputDateTextVariants({ variant }),
          typographyClasses[typography],
          inputDateVariants(),
          className,
        )}
      />
      <Icon
        svg={CaretDown}
        className={cx(
          inputDateIconVariants({ variant: "secondary", size: "sm" }),
          "ml-auto",
        )}
      />
    </label>
  );
};

export default InputDate;
