import type { T_SortTerms } from "@/ts/ui.types"

export type T_ConstrolPanel = {
    sort:T_SortTerms;
    filters:{
        categories:{
            title:string;
            terms:Array<string>
        };
        topics:{
            title:string;
            terms:Array<string>
        };
    }
}