import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type PlaceholderProps = {
  /** Bracket label shown as [label] until final copy is approved. */
  label: string;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
};

/**
 * All user-facing marketing copy must render through this component
 * except for the small set of approved literal strings.
 */
export function Placeholder({
  label,
  as: Component = "span",
  className,
  children,
}: PlaceholderProps) {
  return (
    <Component className={cn(className)} data-placeholder={label}>
      {children ?? `[${label}]`}
    </Component>
  );
}
