import { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { cn, VariantProps } from "cvax";
import { buttonVariants } from "../Button/Button";

type Props = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    children?: React.ReactNode;
  } & VariantProps<typeof buttonVariants>;

const ButtonLink = forwardRef<HTMLAnchorElement, Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Link
        className={cn(buttonVariants({ variant, size }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink, type Props as ButtonLinkProps };
