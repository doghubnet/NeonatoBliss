import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-navy/20 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-sage",
        className
      )}
      {...props}
    />
  );
}
