import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as Indian Rupees, e.g. 1250 -> "₹1,250" */
export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
