'use client'
import useHorizontalScroll from "@/lib/hooks/useHorizontalScroll";
import {HomeCaseStudyCard as Card}from "@/utils/cards"
import { useRef } from "react"
export default function CaseStudiesList(){
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    useHorizontalScroll({sectionRef,trackRef});
    return (
          <section ref={sectionRef}>
            <div className="min-h-svh mx-auto  pt-13 pr-12 overflow-hidden">
                <div
                    ref={trackRef}
                    className="flex gap-6 w-max py-10 pl-7 pr-5"
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}