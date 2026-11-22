import { cn } from "@/lib/utils";

/**
 * Renders rich text written in the admin portal's editor.
 * The HTML is sanitised on the server when it is saved.
 */
export default function Rich({ html, className, inline }: { html?: string; className?: string; inline?: boolean }) {
  if (!html) return null;
  const Tag = inline ? "span" : "div";
  return <Tag className={cn("rich", inline && "rich-inline", className)} dangerouslySetInnerHTML={{ __html: html }} />;
}
