import { useState, type FormEvent } from "react";
import { sendInquiry } from "./api";

/** Submits an inquiry form to the CMS API (shows up under "Students Inquiries" in the admin portal). */
export function useInquiry(source: string, successFallback = "Thank you! Your inquiry has been received.") {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const v = new FormData(form);
    const get = (k: string) => String(v.get(k) ?? "").trim();
    setStatus("sending");
    try {
      const msg = await sendInquiry({
        name: get("name"), email: get("email"), phone: get("phone"), course: get("course"), message: get("message"),
        website: get("website"), source,
      });
      setMessage(msg || successFallback);
      setStatus("success");
      form.reset();
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return { status, message, onSubmit, sending: status === "sending" };
}

/** Hidden field that real visitors never fill in; bots do. Rendered inside every inquiry form. */
export const honeypotProps = {
  name: "website", type: "text", tabIndex: -1, autoComplete: "off", "aria-hidden": true,
  style: { position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 },
} as const;
