import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {

   // if (!inputs || inputs.length === 0) {
   //  console.warn("⚠️ cn() called with no arguments."); 

  
  return twMerge(clsx(inputs));
}
