'use client'

import Lenis from "lenis"
import { useEffect } from "react"

export default function LenisProvider({children}:T_Layout_Props) {

    // SMOOTH SCROLL

    useEffect(() => {
        const settings = new Lenis({
            duration:1.2,
            smoothWheel:true,
            orientation:'vertical'
        })
        function raf(time:number){
            settings.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
        return () => {
            settings.destroy()
        }
    },[])

    return (children)
}