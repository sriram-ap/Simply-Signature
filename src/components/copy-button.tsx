"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

export function CopyButton({
  text,
  label,
  copiedLabel = "Copied!",
  variant = "outline",
  size = "md",
  className,
}: {
  text: string;
  label: string;
  copiedLabel?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard can be unavailable (e.g. non-secure context); fall back to prompt.
      window.prompt("Copy this message:", text);
    }
  }

  return (
    <Button type="button" variant={variant} size={size} className={className} onClick={copy}>
      {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
      {copied ? copiedLabel : label}
      <span aria-live="polite" className="sr-only">
        {copied ? "Message copied to clipboard" : ""}
      </span>
    </Button>
  );
}
