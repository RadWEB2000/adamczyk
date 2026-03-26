import local from "next/font/local";
import {Plus_Jakarta_Sans, Geist_Mono} from "next/font/google"

const clashDisplay = local({
  src:'./clash-display.woff2',
  variable:'--font-clash-display',
  weight:'500 600 700 900',
  display:'swap',
  preload:true,
  fallback:['sans-serif']
})

const clashGrotesk = local({
  src:'./clash-grotesk.woff2',
  variable:'--font-clash-grotesk',
  weight:'400 500 600 700',
  display:'swap',
  preload:true,
  fallback:['sans-serif']
})

const satoshi = local({
  src:'./satoshi.woff2',
  variable:'--font-satoshi',
  weight:'400 600 700',
  display:'swap',
  preload:true,
  fallback:['sans-serif']
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
  fallback: ['sans-serif'],
});

const geist = Geist_Mono({
  variable: '--font-geist-mono',
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

export {clashDisplay,clashGrotesk,jakarta,geist,satoshi}