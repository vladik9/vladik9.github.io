import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadCV() {
  const link = document.createElement('a')
  link.href = 'https://raw.githubusercontent.com/vladik9/vladik9.github.io/main/public/cv/Cornici Vlad.pdf'
  link.download = 'cv.pdf'
  link.click()
}
