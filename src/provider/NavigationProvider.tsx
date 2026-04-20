'use client'
import NavigationContext from "@/context/NavigationContext";
import { useEffect, useState } from "react";

export default function NavigationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

    const [isExpandMenu,toggleIsExpandMenu] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
  const handleScroll = () => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop

    setIsScrolled(scrollTop > 250)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
    return (
        <NavigationContext.Provider
            value={{
                closeDropdowns:() => {},
                closeExpandMenu:() => toggleIsExpandMenu(false),
                isExpandMenu:isExpandMenu,
                toggleExpandMenu:() => toggleIsExpandMenu(!isExpandMenu),
                isScrolled:isScrolled
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}