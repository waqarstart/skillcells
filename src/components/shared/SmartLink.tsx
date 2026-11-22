import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router";

/** Internal paths use the router; full URLs open in a new tab. */
export default function SmartLink({ to, ...props }: { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (/^(https?:|mailto:|tel:)/.test(to)) return <a href={to} target="_blank" rel="noopener noreferrer" {...props} />;
  return <Link to={to || "/"} {...props} />;
}
