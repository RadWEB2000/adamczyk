import { Oswald, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

const oswald = Oswald({
  subsets:['latin','latin-ext'],
  display:'swap',
  preload:true,
  variable:'--font-heading'
})

const grotesk = Plus_Jakarta_Sans({
  subsets:['latin','latin-ext'],
  display:'swap',
  variable:'--font-text'
})


export {oswald, grotesk}