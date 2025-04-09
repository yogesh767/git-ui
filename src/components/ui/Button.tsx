// src/components/ui/Button.tsx
import classNames from "classnames";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost" | "default";
  size?: "sm" | "md";
};

export const Button = ({ variant = "default", size = "md", className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "rounded px-3 py-1 text-sm font-medium",
        {
          "bg-transparent hover:bg-gray-100": variant === "ghost",
          "bg-white border border-gray-300": variant === "default",
          "text-xs px-2 py-1": size === "sm",
        },
        className
      )}
    />
  );
};
