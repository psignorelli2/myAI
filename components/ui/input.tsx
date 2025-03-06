import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-[#3A3A3A] bg-[#2E2E2E] px-3 py-2 text-sm text-[#E4E4E4] ring-offset-[#1E1E1E] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#A0A0A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#505050] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }