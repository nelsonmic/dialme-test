import * as React from "react";

import { cn } from "@/lib/utils";
import { Row } from "../atoms/layout";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const _Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-6 w-full rounded-md border border-input bg-stone-950 px-3 py-2 text-sm ring-offset-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

_Input.displayName = "_Input";

interface Props extends InputProps {
  container?: React.HTMLAttributes<HTMLDivElement>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  function Input_(
    { container, leftElement, rightElement, ...props },
    ref
  ) {
    return (
      <Row
        {...container}
        className={cn(
          "items-center h-12 py-2 px-4 w-full rounded-3xl border border-stone-900 bg-stone-950 text-sm text-gray-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          container?.className
        )}
      >
        {leftElement}
        <_Input
          {...props}
          ref={ref}
          className={cn(
            "px-0 h-full border-0 outline-none focus-visible:ring-0",
            props.className
          )}
        />
        {rightElement}
      </Row>
    );
  }
);

Input.displayName = "Input";

export { Input };