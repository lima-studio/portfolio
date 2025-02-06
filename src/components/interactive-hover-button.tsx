import React from "react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colors: {
    primary: string;
    hover: string;
    text?: string;
  },
  icon: React.ReactNode
  width?: string

}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        `min-w-16 h-16 ${props.width ? props.width : "w-[250px]"} group relative  cursor-pointer overflow-hidden rounded  bg-${props.colors.primary} px-8  text-center font-medium`,
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className={`h-2 w-2 rounded-full bg-${props.colors.hover} transition-all duration-300 group-hover:scale-[100.8]`}></div>
        <span className={`inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 ${props.colors.text ? `text-${props.colors.text}` : ""}`}>
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        {props.icon}
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
