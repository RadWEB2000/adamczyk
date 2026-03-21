import type { SVGAttributes } from "react";

export {};
declare global {
    type T_SVG = SVGAttributes<SVGElement>;

    type T_Layout_Props = Readonly<{
        children: React.ReactNode;
    }>;
}