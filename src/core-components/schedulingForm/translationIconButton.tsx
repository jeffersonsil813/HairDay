import { cva, type VariantProps } from "class-variance-authority";
import BRL_Flag from "../../assets/images/BRL-flag.png";
import USA_Flag from "../../assets/images/USA-flag.png";
import { useLanguage } from "../../hooks/useLanguage";

const translationIconButtonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer hover:opacity-50 transition-opacity",
  {
    variants: {
      size: {
        sm: "h-10 w-10",
      },
    },
    defaultVariants: { size: "sm" },
  },
);

const translationIconVariants = cva("transition-opacity", {
  variants: {
    size: {
      sm: "h-10 w-10",
    },
  },
  defaultVariants: { size: "sm" },
});

interface TranslationIconButtonProps
  extends
    VariantProps<typeof translationIconButtonVariants>,
    Omit<React.ComponentProps<"button">, "size" | "onClick"> {}

const TranslationIconButton = ({
  className,
  ...props
}: TranslationIconButtonProps) => {
  const { isEn, toggleLanguage } = useLanguage();
  const iconSrc = isEn ? USA_Flag : BRL_Flag;

  return (
    <button
      className={translationIconButtonVariants({ className })}
      {...props}
      onClick={toggleLanguage}
    >
      <img
        src={iconSrc}
        alt="Translation Flag"
        className={translationIconVariants()}
      />
    </button>
  );
};

export default TranslationIconButton;
