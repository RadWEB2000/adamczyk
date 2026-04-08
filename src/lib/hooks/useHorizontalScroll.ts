'use client'

import type { T_useHorizontalScroll } from "@/ts/hooks.types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function useHorizontalScroll({sectionRef,trackRef}:T_useHorizontalScroll){
    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if(!section || !track) return;
        function setupAnimation(){
            const totalScroll = track!.scrollWidth - window.innerWidth;
            return gsap.to(track, {
                x:-totalScroll,
                ease:"none",
                scrollTrigger:{
                    trigger:section,
                    start:'top top',
                    end:`+=${totalScroll}`,
                    scrub:true,
                    pin:true,
                    invalidateOnRefresh:true,
                }
            })
        }
        const tween = setupAnimation();
        return () => {
            tween.kill();
        }
    },[sectionRef,trackRef])
}