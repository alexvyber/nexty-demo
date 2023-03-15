import { blueButtonConfig } from "@/themes/two";
import { cvax, mergeVariants, VariantProps } from "cvax";

const config = {
  base: "rounded-md text-center hover:opacity-90",
  variants: {
    variant: {
      primary: "bg-orange-500",
      secondary: "bg-slate-300",
      outline: "border border-slate-700",
      ghost: "text-slate-500",
    },
    size: {
      sm: "p-1 text-base",
      base: "p-2 text-lg",
      md: "py-3 px-5 text-2xl",
      lg: "py-4 px-7 text-3xl",
      xl: "py-6 px-10 text-5xl",
    },
  },
  defaultVariants: { variant: "primary", size: "base" },
  compoundVariants: [],
} as const;

// const variants = cvax(config);
const variants = cvax(mergeVariants(config, blueButtonConfig));

type Props = VariantProps<typeof variants> & {} & React.PropsWithChildren;

const Button = ({ children, variant, size }: Props) => {
  return <button className={variants({ variant, size })}>{children}</button>;
};

Button.displayName = "Button";

export {
  Button,
  config as buttonConfig,
  variants as buttonVariants,
  type Props as ButtonProps,
};
