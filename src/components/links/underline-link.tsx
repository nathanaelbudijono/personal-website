import * as React from "react";

import cn from "@/type/clsxm";
import UnstyledLink, { UnstyledLinkProps } from "./unstyled-link";

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          "link-underline link-underline-black text-sm font-[400] leading-none max-sm:text-xs items-center text-primary-200 dark:text-tertiary-300",
          "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
