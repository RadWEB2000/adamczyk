'use client';

import { createContext } from "react";

const NavigationContext = createContext({
    isExpandMenu:false,
    toggleExpandMenu:() => {},
    closeExpandMenu:() => {},
    closeDropdowns:() => {},
    isScrolled:false
})

export default NavigationContext;