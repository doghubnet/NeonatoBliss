import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sage",
        className
      )}
      {...props}
    />
  );
}
