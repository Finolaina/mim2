import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  // In production (GitHub Pages), we serve under /mim2
  // In development, we serve under root
  const basePath = process.env.NODE_ENV === 'production' ? '/mim2' : '';
  // Ensure path starts with / if not present
  const safePath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${safePath}`;
}
